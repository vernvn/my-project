import * as xmlbuilder from 'xmlbuilder';
import * as fs from 'fs';
import * as fileSaver from 'file-saver';
const parse = require('../../../../parse');
export const createXml = async (res, file) => {
    let feed = xmlbuilder.create('manifest', { encoding: 'utf-8' })
        .att('xmlns', 'http://www.imsproject.org/xsd/imscp_rootv1p1p2');
    for (let x in res) {
        if (typeof res[x] !== 'object') {
            feed.ele(x, res[x]).up();
        } else {
            let item = feed.ele(x);
            for (let y in res[x]) {
                if (typeof y !== 'object') {
                    item.ele(y, res[x][y]).up();
                }
            }
        }
    }
  let xml = feed.end({ pretty: true });
  let blob = new Blob([xml], { type: 'text/plain; charset=utf-8'});
  await fileSaver.saveAs(blob, res.name + '.xml');
  let url = URL.createObjectURL(blob);
  return url;
};
