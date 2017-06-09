/**
 * @author  bingur
 * 定义与后台通信对象
 * @construtor
 */
import {
    DescriptionObject,
    ConditionObject,
    HandleObject,
    DesOptionObject,
    OptionObject,
    ExclusiveObject,
    QuestionObject,
    ProgressObject,
    ScoreObject,
    ValueObject,
    ProgressArray,
    Paper,
    HandleArray,
} from './dataObject';
import { HandleErrorService } from '../handle_error';

declare let $: any;
let dtdTs = $.Deferred();
let url, domainUrl, code, question, order = [], totalScore = 0,            // 记录获取服务器时间的本地时间节点
    studyCodeUrl = '/web/api/getStudyCode',         // 获取code
    studyTsUrl = 'web/api/token/getStudyTs',      // 获取token，sessionId的服务器接口
    startStudyUrl = '/api/oper/study/startStudy',    // 开始学习的服务器接口
    commitStudyUrl = '/api/oper/study/commitStudy',  // 提交的服务器接口
    exitStudyUrl = '/api/oper/study/exitStudy';      // 退出的服务器接口



/**
 * 解析url后面的数据的方法
 * @param search 传入url的search数据部分
 * @returns {{urlObj}} 返回一个以数据为属性的对象
 */
let urlParse = (search): any => {
    let urlObj: any = {};

    if (search === '') {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    if (search.indexOf('?') !== -1) {
        let dataStr = search.substr(1).split('&');
        for (let i = 0, len = dataStr.length; i < len; i++) {
            let dataStrsin = dataStr[i].split('=');
            urlObj[dataStrsin[0]] = dataStrsin[1];
        }
    }

    if (
        typeof urlObj.courseNumber === 'undefined' ||
        typeof urlObj.faultNumber === 'undefined' ||
        typeof urlObj.domainUrl === 'undefined' ||
        typeof urlObj.userEmail === 'undefined' ||
        typeof urlObj.domainAccount === 'undefined' ||
        typeof urlObj.userCourseClassId === 'undefined'
    ) {
        // window.location.href='http://content.xiaochejiang.com/warn.html';
    }
    return urlObj;
};



/**
 * 初始化得分对象
 * @param scoreObjects 获取的得分对象数组
 * @param paper 试题对象
 * @param handle 动作对象
 */
let analyzeScoreObject = (scoreObjects, paper, handle) => {
    for (let i = 0; i < scoreObjects.length; i++) {
        let scoreObject = new ScoreObject(
            scoreObjects[i].id,
            scoreObjects[i].rate,
            scoreObjects[i].questionId
        );
        if (scoreObjects[i].handleId) {
            if (handle.actionMap.find(scoreObjects[i].handleId)) {
                let handleObject = handle.actionMap.get(scoreObjects[i].handleId);
                handleObject.SID = scoreObject.id;
                scoreObject.handleArray.push(handleObject);
            }
        }
        paper.scoreMap.put(scoreObject.id, scoreObject);
    }
};

/**
 * 初始化数值对象
 * @param objects 传入的获取的数组
 * @param map 要存入的map对象
 */
let analyzeValueAry = (objects, map) => {
    for (let i = 0; i < objects.length; i++) {
        let valueObject = new ValueObject(
            objects[i].id,
            objects[i].discription,
            objects[i].value
        );
        map.put(valueObject.id, valueObject);
    }
};

/**
 * 初始化互斥得分对象
 * @param objects 传入的获取的数组
 * @param array 要存入的array对象
 */
let analyzeExclusiveAry = (objects, array) => {
    for (let i = 0; i < objects.length; i++) {
        let exclusiveObject = new ExclusiveObject(
            objects[i].idArray,
            objects[i].priorityId
        );
        array.push(objects[i]);
    }
};

/**
 * 初始化动作对象
 * @param handleObjects 传入的获取的数组
 * @param handle 动作对象
 */
let analyzeHandleAry = (handleObjects, handle) => {
    for (let i = 0; i < handleObjects.length; i++) {
        let handleObject = new HandleObject(
            handleObjects[i].id,
            handleObjects[i].rate);
        for (let j = 0; j < handleObjects[i].condition.length; j++) {
            let conditionObject = new ConditionObject(
                handleObjects[i].condition[j].id,
                handleObjects[i].condition[j].linkVID,
                handleObjects[i].condition[j].cdt,
                handleObjects[i].condition[j].cdtID,
                handleObjects[i].condition[j].cdtValue
            );
            conditionObject.linkHID = handleObjects[i].id;
            if (handle.valueMap.find(handleObjects[i].condition[j].linkVID)) {
                handle.valueMap
                    .get(handleObjects[i].condition[j].linkVID)
                    .cdtMap.put(conditionObject.id, conditionObject);
            }
            handleObject.conditionMap.put(conditionObject.id, conditionObject);
        }
        handle.actionMap.put(handleObject.id, handleObject);
    }
};

/**
 * 初始化动作对象
 * @param progressObjects 传入的获取的数组
 * @param map 要存入的map对象
 * @param handle 动作对象
 */
let analyzeProgressAry = (progressObjects, map, handle) => {
    for (let i = 0; i < progressObjects.length; i++) {
        let progressObject = new ProgressObject(
            progressObjects[i].id,
            progressObjects[i].rate
        );
        if (handle.actionMap.find(progressObjects[i].handleId)) {
            let idArray = progressObjects[i].handleId.split(',');
            for (let j = 0; j < idArray.length; j++) {
                let handleObject = handle.actionMap.get(idArray[j]);
                handleObject.PID = progressObjects[i].id;
                progressObject.handleArray.push(handleObject);
            }
        }
        map.put(progressObject.id, progressObject);
    }
};

/**
 * 初始化试题对象
 * @param questionObjects 传入的获取的数组
 * @param array 要存入的array对象
 */
function analyzeQuestionAry(questionObjects, array) {
    let flag;
    for (let i = 0; i < questionObjects.length; i++) {
        let descriptionObject = questionObjects[i].description;
        let desOptionObject;
        if (typeof (questionObjects[i].description) === 'Object') {
            for (let j = 0; j < questionObjects[i].description.optionArray.length; j++) {
                desOptionObject = new DesOptionObject(
                    questionObjects[i].description.optionArray[j].linkOptionID,
                    questionObjects[i].description.optionArray[j].description,
                    questionObjects[i].description.optionArray[j].isSub
                );
            }
            descriptionObject = new DescriptionObject(
                questionObjects[i].description.dtArray.concat(),
                desOptionObject
            );
        }
        let questionObject = new QuestionObject(
            questionObjects[i].id,
            questionObjects[i].rate,
            questionObjects[i].type,
            descriptionObject,
            questionObjects[i].kp,
            questionObjects[i].remark
        );
        if (questionObjects[i].option) {
            analyzeOptionAry(questionObjects[i].option, questionObject.optionArray);
        }
        if (flag) {
            if (questionObjects[i].question) {
                analyzeOptionAry(questionObjects[i].question.option, questionObject.optionArray);
            }
        }
        if (questionObjects[i].type === '5') {
            flag = true;
        }
        if (questionObjects[i].question) {
            arguments.callee(questionObjects[i].question, questionObject.questionArray);
        }
        array.push(questionObject);
    }
}

/**
 * 初始化选项对象
 * @param optionObjects 传入的获取的数组
 * @param array 要存入的数组对象
 */
function analyzeOptionAry(optionObjects, array) {
    if (optionObjects) {
        for (let i = 0; i < optionObjects.length; i++) {
            let optionObject = new OptionObject(
                optionObjects[i].id,
                optionObjects[i].description,
                optionObjects[i].isRight
            );
            if (optionObjects[i].option) {
                arguments.callee(optionObjects[i].option, optionObject.optionArray);
            }
            array.push(optionObject);
        }
    }
}





/**
 * @author  周博宇
 * 定义与后台通信对象
 * @construtor
 */
class Adapter {
    domainAccount: string;
    userEmail;
    sessionId;
    token;
    courseNumber;
    faultNumber;
    userCourseClassId;
    type;
    seconds;
    progress;
    score;
    isComplete;
    isPass;
    characterA;
    characterB;
    characterC;
    courseName;
    passCondition;
    completeCondition;
    serverTime;
    code?;
    constructor(private handleErrorService: HandleErrorService) {
        this.domainAccount = '';      // 当前域名
        this.userEmail = '';          // 当前用户email（当前账号唯一标识）
        this.sessionId = '';          // 当前学习过程唯一标识
        this.token = '';              // 当前学习过程口令
        this.courseNumber = '';       // 当前学习课程编号
        this.faultNumber = '';        // 当前学习故障编号
        this.userCourseClassId = '';               // 随机验证码
        this.type = 1;                // 课件类型
        this.seconds = 0;             // 学习时间
        this.progress = 0;            // 进度
        this.score = 0;               // 得分
        this.isComplete = 0;          // 是否完成
        this.isPass = 0;              // 能否通过
        this.characterA = {
            progress: [],
            score: [],
            handle: []
        };         // 进度、得分、动作详细数据
        this.characterB = {};         // 试题集合
        this.characterC = {
            handle: []
        };         // 自定义参数
        this.courseName = '';         // 课件名称
        this.passCondition = 0;       // 通过条件
        this.completeCondition = 0;   // 完成条件
        this.serverTime = '';           // 服务器返回时间


    }

    /**
     * @author 周博宇
     * 初始化必要参数
     */
    init() {
        // console.log(this.handleErrorService);

        let data = urlParse(location.search);

        this.courseNumber = data.courseNumber;
        this.faultNumber = data.faultNumber;
        domainUrl = data.domainUrl;
        this.userEmail = data.userEmail;
        this.domainAccount = data.domainAccount;
        this.userCourseClassId = data.userCourseClassId;
    };


    /**
     * @author 周博宇
     * 获取token，sessionId
     * @param dtd
     */
    getStudyTs(dtd) {
        let userEmail = this.userEmail;
        let getStudyTsUrl = domainUrl + studyTsUrl;
        let data1 = {
            'email': this.userEmail,
            'courseNumber': this.courseNumber,
            'faultNumber': '',
            'domainUrl': domainUrl,
            'domainAccount': this.domainAccount,
            'userCourseClassId': this.userCourseClassId,
        };
        let getStudyCodeUrl = domainUrl + studyCodeUrl;

        // console.log('getStudyCodeUrl:'+ getStudyCodeUrl);
        $.ajax({
            type: 'get',
            url: getStudyCodeUrl,
            data: data1,
            dataType: 'jsonp',
            jsonp: 'callback',
            success: (data) => {
                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0') {
                        code = data.code;
                    } else {
                        // console.log(data.errCode);
                        this.handleErrorService.handleError(+data.errCode);
                    }

                }
            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        }).then(() => {
            let data = { 'userEmail': userEmail, 'code': code };

            $.ajax({
                type: 'get',
                url: getStudyTsUrl,
                data,
                dataType: 'jsonp',
                jsonp: 'callback',
                success: (data) => {
                    if (data === '') {
                        this.handleErrorService.handleError(21);
                    } else {
                        if (data.errCode === '0') {
                            this.sessionId = data.sessionId;
                            this.token = data.token;
                            dtd.resolve();
                        } else {
                            // console.log(data.errCode);
                            this.handleErrorService.handleError(+data.errCode);
                        }
                    }
                },
                error: (jqXHR, textStatus, errorMsg) => {
                    this.handleErrorService.handleError(20);
                    // console.error(errorMsg);
                },
            });

        });
    };



    /**
     * @author 周博宇
     * 开始学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    startStudy(progress, paper, handle) {
        url = 'http:\/\/' + location.host + startStudyUrl;
        let obj: any = {};
        obj.adapter = JSON.stringify(this);

        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            data: obj,
            success: (data) => {
                if (data.errCode === '0') {
                    totalScore = data.adapter.totalScore;
                    order = data.adapter.characterB.question;
                    // console.log(JSON.stringify(order));
                    this.domainAccount = data.adapter.domainAccount;
                    this.userEmail = data.adapter.userEmail;
                    this.sessionId = data.adapter.sessionId;
                    this.token = data.adapter.token;
                    this.courseNumber = data.adapter.courseNumber;
                    this.faultNumber = data.adapter.faultNumber;
                    this.code = data.adapter.code;
                    this.type = data.adapter.type;
                    this.seconds = data.adapter.seconds;
                    this.progress = data.adapter.progress;
                    this.score = data.adapter.score;
                    this.isComplete = data.adapter.isComplete;
                    this.isPass = data.adapter.isPass;
                    this.courseName = data.adapter.courseName;
                    this.passCondition = data.adapter.passCondition;
                    this.completeCondition = data.adapter.completeCondition;
                    this.serverTime = data.adapter.serverTime;
                    this.characterC = data.adapter.characterC;
                    // console.log('响应的data.adapter',data.adapter);
                    this.analyzeCharacter(
                        data.adapter.characterA,
                        data.adapter.characterB,
                        data.adapter.characterC,
                        progress,
                        paper,
                        handle,
                    );
                    progress.rate = this.progress;
                    paper.rate = this.score;
                } else {
                    this.handleErrorService.handleError(+data.errCode);
                }
                if (data === '') {
                    this.handleErrorService.handleError(21);
                }
                // console.log(data.errCode);

            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                //  console.error(errorMsg);
            }
        });

    };



    /**
     * * @author 周博宇
     * 解析学习数据字符串
     * @param characterA 平台返回的进度、得分、动作详细数据
     * @param characterB 平台返回的的试题合集
     * @param characterC
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    analyzeCharacter(characterA, characterB, characterC, progress, paper, handle) {
        if (characterB) {
            characterB = JSON.parse(characterB);
            // 初始化handle valueArray
            if (characterB.value) {
                analyzeValueAry(characterB.value, handle.valueMap);
            }
            // 初始化handle.actionMap
            if (characterB.handle) {
                analyzeHandleAry(characterB.handle, handle);
            }
            // 初始化progressMap.array
            if (characterB.progress) {
                analyzeProgressAry(characterB.progress, progress.progressMap, handle);
            }
            // 初始化paper exclusiveArray
            if (characterB.exclusive) {
                analyzeExclusiveAry(characterB.exclusive, paper.exclusiveArray);
            }
            // 初始化 paper questionArray
            if (characterB.question) {
                analyzeQuestionAry(characterB.question, paper.questionArray);
            }
            // 初始化paper scoreArray
            if (characterB.score) {
                analyzeScoreObject(characterB.score, paper, handle);
            }
        }

        if (characterA) {
            // console.log('解析响应的charA');
            characterA = JSON.parse(characterA);
            if (characterA.progress.length !== 0) {
                for (let i = 0; i < characterA.progress.length; i++) {
                    progress.setProgress(characterA.progress[i].id);
                }
                progress.isUpdate = true;
            }
            if (characterA.score.length !== 0) {
                for (let j = 0; j < characterA.score.length; j++) {
                    let ids = [];
                    if (characterA.score[j].optionArray.length !== '0') {
                        for (let k = 0; k < characterA.score[j].optionArray.length; k++) {
                            ids.push(characterA.score[j].optionArray[k].id);
                        }
                        paper.setQuestion(
                            paper.scoreMap.get(characterA.score[j].id).questionID,
                            ids.join(','),
                            true,
                        );
                    }
                }
                paper.isUpdate = true;
            }
            if (characterA.handle.length !== 0) {
                for (let x = 0; x < characterA.handle.length; x++) {
                    if (handle.actionMap.find(characterA.handle[x].id)) {
                        handle.setHandle(
                            characterA.handle[x].id,
                            progress,
                            paper,
                            characterA.handle[x].time,
                        );
                    }
                }
                handle.isUpdate = true;
            }
        }

        // console.log(characterC);
        if (characterC) {
            characterC = JSON.parse(characterC);
            if (characterC !== [] && characterC) {
                for (let y = 0; y < characterC.length; y++) {
                    handle.setHandle(characterC[y].id, progress, paper, characterC[y].time, 1, 1);
                }
            }
        }
        progress.sumProgressStr();
        paper.sumScoresStr();
        handle.sumHandleStr();

    };


    /**
     * @author 周博宇
     * 合成学习数据字符串
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    composeCharacter(progress, paper, handle) {
        progress.sumRate();
        progress.sumProgressStr();
        this.characterA.progress = progress.progressStr;
        paper.sumScoresStr();
        paper.sumRate();
        this.characterA.score = paper.scoresStr;
        handle.sumHandleStr();
        this.characterA.handle = handle.handleStr;
        let array = [];
        handle.reHandle.eachMap((key, value) => {
            array.push(value);
        });
        this.characterC = array.concat();
        this.progress = progress.rate;
        this.score = paper.rate;
    };



    /**
     * @author 周博宇
     * 提交学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    commitStudy(progress, paper, handle) {
        this.composeCharacter(progress, paper, handle);
        let obj1: any = {};
        obj1.adapter = JSON.stringify(this);
        // console.log(this);
        url = 'http:\/\/' + location.host + commitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj1,
            dataType: 'json',
            success: (data) => {

                if (data === '') {
                    this.handleErrorService.handleError(21);
                } else {
                    if (data.errCode === '0') {
                        this.serverTime = data.serverTime;
                    } else {
                        this.handleErrorService.handleError(+data.errCode);
                    }
                }
                // console.log(data.errCode);


            },
            error: (jqXHR, textStatus, errorMsg) => {
                this.handleErrorService.handleError(20);
                // console.error(errorMsg);
            }
        });
    };

    /**
     * @author 周博宇
     * 退出学习
     * @param progress 进度数组对象
     * @param paper 试题数组对象
     * @param handle 动作数组对象
     */
    exitStudy(progress, paper, handle) {
        this.composeCharacter(progress, paper, handle);
        let obj2: any = {};
        obj2.adapter = JSON.stringify(this);
        url = 'http:\/\/' + location.host + exitStudyUrl;
        $.ajax({
            type: 'post',
            url: url,
            data: obj2,
            dataType: 'json'
        });
    };

}

export { Adapter, totalScore };
