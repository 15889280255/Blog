const multer = require('multer')
const path = require('path')
const fs = require("fs");
const response = require('./response')

const createFolder = function (folder) {
  try {
    let p = folder.split("..").pop().split("/")
    // 同步地创建目录
    fs.mkdirSync(p[1]);
    fs.mkdirSync(p[1] + "/" + p[2]);
  } catch (e) {
  }
};

function handleMulter() {
  let upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        const uploadConfig = req.app.get("uploadConfig");
        if (!uploadConfig.mimetype[file.mimetype]) {
          response(file, 1, "上传错误");
          return;
        }
        const childFloder = uploadConfig.mimetype[file.mimetype];
        createFolder(__dirname + "/../uploads/" + childFloder);
        file.childFloder = childFloder;
        cb(null, __dirname + "/../uploads/" + childFloder + "/");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
      }
    })
  })

  return upload
}

module.exports = handleMulter