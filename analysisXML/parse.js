{
    let XLSX = require('xlsx'),
        builder = require('xmlbuilder'),
        fs = require('fs'), firstQuestion;



    if (!Array.prototype.shuffle) {
        Array.prototype.shuffle = function () {
            "use strict";
            for (let j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
            return this;
        };
    };

    if (!String.prototype.padString) {
        String.prototype.padString = function (padValue) {
            "use strict";
            return String(padValue + this).slice(-padValue.length);
        }
    }

    let parseSheetToJson = (workbook) => {
        "use strict";
        let result = [],
            sheetNames = workbook.SheetNames;

        workbook.SheetNames.forEach((sheetName) => {
            let worksheet = workbook.Sheets[sheetName];
            result.push(XLSX.utils.sheet_to_json(worksheet));
        });
        return result;
    };



    let writeStreamToXML = (data, filePathAndName) => {
        let xml = builder.create('fault', { encoding: 'UTF-8' })
            .ele(data)
            .up()
            .end({ pretty: true }),
            ws = fs.createWriteStream(filePathAndName);
        ws.write(xml);
        ws.end();
    };

    let splitQuestions = (workbookData) => {
        let num = workbookData[0][0].questionNum,
            questions = [],
            allQuestions = [];
        workbookData.forEach((sheetData) => {
            sheetData.forEach((data, idx) => {
                if (data.questionNum && num !== data.questionNum) {
                    allQuestions.push(questions);
                    questions = [];
                }
                questions.push(data);
                num = data.questionNum;
            });
        });
        allQuestions.push(questions);
        return allQuestions;
    };

    let validQuestionData = (question) => {
        if (typeof question.questionNum === "undefined") {
            console.log("error: xlsx questionNum 缺失, 位置信息: " + question);
            return false;
        }
        return true;
    };

    let parseOneQuestion = (question, idx) => {
        let questionData = [],
            score = [],
            currentNum = idx + 1,
            idxPad = (idx + 1 + "").padString("00"),
            options = [],
            scoreOption,
            id = "xcj_" + idxPad,
            hid = "xcj_001012_" + idxPad,
            answers = []
        question.answer1 && answers.push({
            answer: question.answer1,
            isRight: question.trueAnswer === "1"
        });
        question.answer2 && answers.push({
            answer: question.answer2,
            isRight: question.trueAnswer === "2"
        });
        question.answer3 && answers.push({
            answer: question.answer3,
            isRight: question.trueAnswer === "3"
        });
        question.answer4 && answers.push({
            answer: question.answer4,
            isRight: question.trueAnswer === "4"
        });
        answers.shuffle();
        answers.forEach((answer, answerIdx) => {
            let description, id;
            switch (answerIdx) {
                case 0:
                    description = "A. " + answer.answer;
                    id = "xcj_001012_" + idxPad + "_a1";
                    break;
                case 1:
                    description = "B. " + answer.answer;
                    id = "xcj_001012_" + idxPad + "_a2";
                    break;
                case 2:
                    description = "C. " + answer.answer;
                    id = "xcj_001012_" + idxPad + "_a3";
                    break;
                case 3:
                    description = "D. " + answer.answer;
                    id = "xcj_001012_" + idxPad + "_a4";
                    break;
            }
            options.push({
                "@description": description,
                "@id": id,
                "@isRight": answer.isRight ? "1" : "0"
            });
        });
        if (typeof question.description === "undefined") {
            console.log(question);
            console.log("error data 题号: " + JSON.stringify(firstQuestion.questionNum) + " 位置: " + idx + " 当前文件: " + firstQuestion.faultNumber);
        }
        questionData.push({
            "@description": currentNum,
            "@id": id,
            "@reamrk": "",
            question: {
                "@description": question.description || "default",
                "@id": hid,
                "@type": question.questionType || 1,
                option: options
            }
        });
        score.push({
            "@type": "question",
            "@id": id,
            "@hid": hid,
            "@rate": question.rate || 1,
            "@kp": "",
            option: {
                "#text": hid + "_a" + (1 + answers.findIndex((answer) => answer.isRight))
            }
        });
        return { questionData, score };
    };

    let parseQuestionsData = (data, dateIdx) => {
        "use strict";
        firstQuestion = data[0];

        if (!validQuestionData(firstQuestion)) {
            return;
        }
        let allQuestionData = [],
            scores = [];
        data.forEach((question, idx) => {
            let { questionData, score } = parseOneQuestion(question, idx);
            allQuestionData.push(questionData);
            scores.push(score);
        });
        let defaultData = {
            metadata: {
                schema: firstQuestion.schema || "XCJ",
                schemaversion: firstQuestion.schemaversion || "1.0"
            },
            name: firstQuestion.name || "default Name",
            courseNumber: firstQuestion.courseNumber || "default courseNumber",
            faultNumber: firstQuestion.faultNumber || "default faultNumber",
            type: firstQuestion.type || "default type",
            types: firstQuestion.types || "default types",
            purpose: firstQuestion.purpose || "default purpose",
            require: firstQuestion.require || "default require",
            keyword: firstQuestion.keyword || "default keyword",
            description: firstQuestion.xmLDescription || "default description",
            duration: firstQuestion.duration || "default duration",
            difficulty: firstQuestion.difficulty || "default difficulty",
            sumScore: firstQuestion.sumScore || "defualt sumScore",
            score: firstQuestion.score || "defualt score",
            client: firstQuestion.client || "default client",
            passCondition: firstQuestion.passCondition || "defualt passCondition",
            completeCondition: firstQuestion.completeCondition || "defualt completeCondition",
            entry: firstQuestion.entry || "default entry",
            kp: firstQuestion.kp || "defualt kp",
            questions: {
                question: allQuestionData
            },
            scores: {
                score: scores
            }
        };
        return {
            defaultData,
            fileName: firstQuestion.faultNumber
        };

    };

    (() => {
        // const workbook = XLSX.readFile('xlsx/maiteng2.xlsx', { type: 'base64' });
        // let workbookData = parseSheetToJson(workbook);
        // let allQuestionsArray = splitQuestions(workbookData);
        // fs.mkdir(__dirname + '/tmp', function (err) {
        //     if (err)
        //         throw err;
        //     console.log('创建目录成功');
        //     allQuestionsArray.forEach((questions, idx) => {
        //         let { defaultData, fileName } = parseQuestionsData(questions, idx);
        //         writeStreamToXML(defaultData, `./tmp/${fileName}.xml`);
        //     });
        // });

    })();

};
