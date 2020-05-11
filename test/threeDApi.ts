/*
* MIT License

* Copyright (c) 2020 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as BaseTest from "./baseTest";
import { PlySaveOption,PdfSaveOption, SaveOptions, ModelData, Transform, Vector3, Entity, Torus } from "../src/model/model";
var assert = require('assert');
var fs = require('fs');

const threeDApi = BaseTest.initializeThreeDCloudApi();
 

describe('Copy File Test', function () {
    it('Copy file successfully', function () {    
      var req = new model.copyFileRequest();
      req.srcPath  = "3DTest/Aspose.pdf";
      req.destPath = "3DTest/Aspose.Node.pdf";
      req.srcStorageName  = null;
      req.destStorageName = null;
      return threeDApi.copyFile(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

  /**/ 
  describe('Move File Test', function () {
    it('Move file successfully', function () {
      var req = new model.moveFileRequest();
      req.srcPath  = "3DTest/Aspose.Node.pdf";
      req.destPath = "3DTestNodejs/Aspose.Node.pdf";
      req.srcStorageName  = null;
      req.destStorageName = null;
      return threeDApi.moveFile(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

describe('Delete File Test', function () {
    it('Delete file successfully', function () {
      var req = new model.deleteFileRequest();
      req.path  = "3DTestNodejs/Aspose.Node.pdf";
      return threeDApi.deleteFile(req)
        .then((result) => {
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });

describe("UploadFile File Test", function() {
    it("UploadFile successfully", function() {
        var data = fs.createReadStream(BaseTest.localTestDataFolder +  "Aspose.pdf");//readFileSync -> error 
        var req = new model.uploadFileRequest();
        req.path = "3DTest/Aspose.pdf";
        req.file = data;
        return threeDApi.uploadFile(req)
          .then((result) => {
                assert.equal(result.response.statusCode, 200);
        });
    });
});
 
describe("Download File Test", () =>{
    it("should return response with code 200", () => {
        var req = new model.downloadFileRequest();
        req.path = "3DTest/Aspose.Upload.pdf";
        return threeDApi.downloadFile(req)
            .then((result) => {
                assert.equal(result.response.statusCode, 200);
                var fd = fs.openSync(BaseTest.localTestDataFolder+ "/AsposeDownload.pdf", 'w');
                var len = fs.writeSync(fd, result.body);
        });
    });
});


describe('Create Empty 3D File Test', function () {
  it('Create Empty 3D File successfully', function () {    
    var req = new model.postCreateRequest()
    req.format = "pdf";
    return threeDApi.postCreate(req)
      .then((result) => {
        expect(result.body.length).greaterThan(0);
        expect(result.response.statusCode).to.equal(200);
        var local_src_folder = __dirname + "/../testData/";
        var fd = fs.openSync(local_src_folder+ "/AsposeDownload.pdf", 'w');
        var len = fs.writeSync(fd, result);
      });
  });
});

describe('Convert file to other formats with fileformat parameter Test', function () {
  it('Convert File by format successfully', function () {    
    var req = new model.postConvertByFormatRequest()
    req.name = "src";
    req.newformat = "pdf";
    req.newfilename = "saveasformat.pdf";
    req.folder = "3DTest";
    req.isOverwrite = true;
    req.storage = null;
    return threeDApi.postConvertByFormat(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});

describe('Convert file to other formats with Saveoption parameter Test', function () {
  it('Convert File by Saveoption successfully', function () {    
    var req = new model.postConvertByOptRequest()
    req.name = "src";
    var saveopt = new PlySaveOption();
    saveopt.saveFormat = SaveOptions.SaveFormatEnum.PLY;
    
    var pc  = Array<string>("y","x","z");
    saveopt.positionComponents = pc;

    req.saveOptions = saveopt;
    req.newfilename = "saveasOpts.pdf";
    req.folder = "3DTest";
    req.isOverwrite = true;
    req.storage = null;
    return threeDApi.postConvertByOpt(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});

describe('Convert part of the file into different format Test', function () {
  it('Convert part of the file into different format successfully', function () {    
    var req = new model.postSaveAsPartRequest()
    req.name = "parttest.fbx";
    req.objectaddressingpath = "a1";
    req.newformat = "pdf";
    req.newfilename = "saveaspart.pdf";
    req.folder = "3DTest";
    req.isOverwrite = true;
    req.storage = null;
    return threeDApi.postSaveAsPart(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});

describe('Convert part of the file into different format Test', function () {
  it('Convert part of the file into different format successfully', function () {    
    var req = new model.postSaveAsPartRequest()
    req.name = "parttest.fbx";
    req.objectaddressingpath = "a1";
    req.newformat = "pdf";
    req.newfilename = "saveaspart.pdf";
    req.folder = "3DTest";
    req.isOverwrite = true;
    req.storage = null;
    return threeDApi.postSaveAsPart(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});
 

describe('Extract raw data(without any modification) from a password protected PDF file Test', function () {
  it('Extract raw data(without any modification) from a password protected PDF file Test successfully', function () {    
    var req = new model.postPdfRawDataRequest()
    req.name = "extracttest.pdf";
    req.multifileprefix = "rawdata";
    req.password = "";
    req.folder = "3DTest";
    req.storage = null;
    return threeDApi.postPdfRawData(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});


describe('Extract and save in different format Test', function () {
  it('Extract and save in different format Test successfully', function () {    
    var req = new model.postSceneToFileRequest()
    req.name = "extracttest.pdf";
    req.multifileprefix = "newScene";
    req.newformat  = "pdf";
    req.password = null;
    req.folder = "3DTest";
    req.storage = null;
    return threeDApi.postSceneToFile(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});
 
describe('Triangulate whole file and save to the different file Test', function () {
  it('Triangulate whole file and save to the different file Test successfully', function () {    
    var req = new model.postTriangulateNewRequest()
    req.name = "triangulate.3ds";
    req.newfilename = "triangulateNew";
    req.newformat  = "pdf";
    req.folder = "3DTest";
    req.storage = null;
    return threeDApi.postTriangulateNew(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});

describe('Triangulate whole file and save to original file Test', function () {
  it('Triangulate whole file and save to original file Test successfully', function () {    
    var req = new model.postTriangulateOriginalRequest()
    req.name = "triangulate.3ds";
    req.folder = "3DTest";
    req.storage = null;
    return threeDApi.postTriangulateOriginal(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});


describe('Parametric Modeling, Create a Entity Test', function () {
  it('Parametric Modeling, Create a Entity Test successfully', function () {    
    var req = new model.postModelRequest()
    req.name = "Aspose.pdf";
    req.newformat = "pdf";
    req.folder = "3DTest";
    var modeldata = new ModelData();
    var transform = new Transform();
    var vector3= new Vector3();
    var entity= new Entity();
    var torus= new Torus();

    modeldata.transform = transform;
 
    modeldata.transform.translation = vector3;
    modeldata.transform.translation.x = 100;
    modeldata.transform.translation.y = 100;
    modeldata.transform.translation.z = 100;
    
    modeldata.entity = entity;
    modeldata.entity.torus = torus;
    modeldata.entity.torus.radius = 10;
    modeldata.entity.torus.tube = 10;
    modeldata.entity.torus.radialSegments = 10;
    modeldata.entity.torus.tubularSegments = 10;
    req.modeldata = modeldata;
    req.storage = null;
    return threeDApi.postModel(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});

describe('Delete nodes from scene,nodes are addressed by Object Addressing Path', function () {
  it('Delete nodes from scene,nodes are addressed by Object Addressing Path Test successfully', function () {    
    var req = new model.deleteNodesRequest()
    req.name = "oaptest.pdf";
    req.objectaddressingpath = "//*[(@Type = 'Camera') or (@Name = 'light')]";
    req.folder = "3DTest";
    req.storage = null;
    return threeDApi.deleteNodes(req)
      .then((result) => {
        expect(result.response.statusCode).to.equal(200);
      });
  });
});
