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

import http = require("http");
import request = require("request");

import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";
import { FileVersions, DiscUsage, FilesList, AccessTokenResponse, ObjectExist, StorageExist, FilesUploadResult } from "./model/model";
export * from "./model/model";

/**
 * Library for communicating with the Aspose.3D Cloud API
 */
export class ThreeDCloudApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async copyFile(requestObj: model.copyFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async copyFolder(requestObj: model.copyFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling copyFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling copyFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling copyFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async createFolder(requestObj: model.createFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling createFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling createFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async deleteFile(requestObj: model.deleteFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async deleteFolder(requestObj: model.deleteFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling deleteFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete nodes from scene,nodes are addressed by Object Addressing Path
     * @param requestObj contains request parameters
     */
    public async deleteNodes(requestObj: model.deleteNodesRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling deleteNodes.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/nodes";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling deleteNodes.');
        }

        // verify required parameter 'requestObj.objectaddressingpath' is not null or undefined
        if (requestObj.objectaddressingpath === null || requestObj.objectaddressingpath === undefined) {
            throw new Error('Required parameter "requestObj.objectaddressingpath" was null or undefined when calling deleteNodes.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "objectaddressingpath", requestObj.objectaddressingpath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async downloadFile(requestObj: model.downloadFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling downloadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling downloadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async getDiscUsage(requestObj: model.getDiscUsageRequest): Promise<{response: http.ClientResponse, body: DiscUsage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getDiscUsage.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async getFileVersions(requestObj: model.getFileVersionsRequest): Promise<{response: http.ClientResponse, body: FileVersions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFileVersions.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFileVersions.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async getFilesList(requestObj: model.getFilesListRequest): Promise<{response: http.ClientResponse, body: FilesList}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling getFilesList.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling getFilesList.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async moveFile(requestObj: model.moveFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFile.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async moveFolder(requestObj: model.moveFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling moveFolder.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling moveFolder.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling moveFolder.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get Access token
     * @param requestObj contains request parameters
     */
    public async oAuthPost(requestObj: model.oAuthPostRequest): Promise<{response: http.ClientResponse, body: AccessTokenResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling oAuthPost.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/connect/token";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.grantType' is not null or undefined
        if (requestObj.grantType === null || requestObj.grantType === undefined) {
            throw new Error('Required parameter "requestObj.grantType" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientId' is not null or undefined
        if (requestObj.clientId === null || requestObj.clientId === undefined) {
            throw new Error('Required parameter "requestObj.clientId" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientSecret' is not null or undefined
        if (requestObj.clientSecret === null || requestObj.clientSecret === undefined) {
            throw new Error('Required parameter "requestObj.clientSecret" was null or undefined when calling oAuthPost.');
        }
        
        if (requestObj.grantType !== undefined) {
            formParams.grant_type = ObjectSerializer.serialize(requestObj.grantType, "string");
        }

        if (requestObj.clientId !== undefined) {
            formParams.client_id = ObjectSerializer.serialize(requestObj.clientId, "string");
        }

        if (requestObj.clientSecret !== undefined) {
            formParams.client_secret = ObjectSerializer.serialize(requestObj.clientSecret, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AccessTokenResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async objectExists(requestObj: model.objectExistsRequest): Promise<{response: http.ClientResponse, body: ObjectExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling objectExists.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling objectExists.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert file on server to other formats with fileformat parameter             
     * @param requestObj contains request parameters
     */
    public async postConvertByFormat(requestObj: model.postConvertByFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertByFormat.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/saveas/newformat";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postConvertByFormat.');
        }

        // verify required parameter 'requestObj.newformat' is not null or undefined
        if (requestObj.newformat === null || requestObj.newformat === undefined) {
            throw new Error('Required parameter "requestObj.newformat" was null or undefined when calling postConvertByFormat.');
        }

        // verify required parameter 'requestObj.newfilename' is not null or undefined
        if (requestObj.newfilename === null || requestObj.newfilename === undefined) {
            throw new Error('Required parameter "requestObj.newfilename" was null or undefined when calling postConvertByFormat.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert file on server to other formats with saveOption parameter             
     * @param requestObj contains request parameters
     */
    public async postConvertByOpt(requestObj: model.postConvertByOptRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postConvertByOpt.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/saveas/saveoption";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postConvertByOpt.');
        }

        // verify required parameter 'requestObj.saveOptions' is not null or undefined
        if (requestObj.saveOptions === null || requestObj.saveOptions === undefined) {
            throw new Error('Required parameter "requestObj.saveOptions" was null or undefined when calling postConvertByOpt.');
        }

        // verify required parameter 'requestObj.newfilename' is not null or undefined
        if (requestObj.newfilename === null || requestObj.newfilename === undefined) {
            throw new Error('Required parameter "requestObj.newfilename" was null or undefined when calling postConvertByOpt.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
            body: (requestObj.saveOptions == null) ? null : ObjectSerializer.serialize(requestObj.saveOptions, requestObj.saveOptions.constructor.name === "Object" ? "SaveOptions" : requestObj.saveOptions.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create new file with specified format.             
     * @param requestObj contains request parameters
     */
    public async postCreate(requestObj: model.postCreateRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postCreate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/new";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling postCreate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Parametric Modeling, Create a Entity with size and located in ...
     * @param requestObj contains request parameters
     */
    public async postModel(requestObj: model.postModelRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postModel.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/root";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postModel.');
        }

        // verify required parameter 'requestObj.modeldata' is not null or undefined
        if (requestObj.modeldata === null || requestObj.modeldata === undefined) {
            throw new Error('Required parameter "requestObj.modeldata" was null or undefined when calling postModel.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
            body: (requestObj.modeldata == null) ? null : ObjectSerializer.serialize(requestObj.modeldata, requestObj.modeldata.constructor.name === "Object" ? "ModelData" : requestObj.modeldata.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Extract raw data(without any modification) from a password protected PDF file             
     * @param requestObj contains request parameters
     */
    public async postPdfRawData(requestObj: model.postPdfRawDataRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postPdfRawData.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/extract/rawdata";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postPdfRawData.');
        }

        // verify required parameter 'requestObj.multifileprefix' is not null or undefined
        if (requestObj.multifileprefix === null || requestObj.multifileprefix === undefined) {
            throw new Error('Required parameter "requestObj.multifileprefix" was null or undefined when calling postPdfRawData.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "multifileprefix", requestObj.multifileprefix);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert part of the file into different format
     * @param requestObj contains request parameters
     */
    public async postSaveAsPart(requestObj: model.postSaveAsPartRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSaveAsPart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/saveas/part";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSaveAsPart.');
        }

        // verify required parameter 'requestObj.objectaddressingpath' is not null or undefined
        if (requestObj.objectaddressingpath === null || requestObj.objectaddressingpath === undefined) {
            throw new Error('Required parameter "requestObj.objectaddressingpath" was null or undefined when calling postSaveAsPart.');
        }

        // verify required parameter 'requestObj.newformat' is not null or undefined
        if (requestObj.newformat === null || requestObj.newformat === undefined) {
            throw new Error('Required parameter "requestObj.newformat" was null or undefined when calling postSaveAsPart.');
        }

        // verify required parameter 'requestObj.newfilename' is not null or undefined
        if (requestObj.newfilename === null || requestObj.newfilename === undefined) {
            throw new Error('Required parameter "requestObj.newfilename" was null or undefined when calling postSaveAsPart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "objectaddressingpath", requestObj.objectaddressingpath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Extract and save in different format             
     * @param requestObj contains request parameters
     */
    public async postSceneToFile(requestObj: model.postSceneToFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postSceneToFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/extract/scene";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postSceneToFile.');
        }

        // verify required parameter 'requestObj.multifileprefix' is not null or undefined
        if (requestObj.multifileprefix === null || requestObj.multifileprefix === undefined) {
            throw new Error('Required parameter "requestObj.multifileprefix" was null or undefined when calling postSceneToFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "multifileprefix", requestObj.multifileprefix);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "password", requestObj.password);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Triangulate whole file and save to the different file
     * @param requestObj contains request parameters
     */
    public async postTriangulateNew(requestObj: model.postTriangulateNewRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTriangulateNew.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/triangulate/new";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTriangulateNew.');
        }

        // verify required parameter 'requestObj.newfilename' is not null or undefined
        if (requestObj.newfilename === null || requestObj.newfilename === undefined) {
            throw new Error('Required parameter "requestObj.newfilename" was null or undefined when calling postTriangulateNew.');
        }

        // verify required parameter 'requestObj.newformat' is not null or undefined
        if (requestObj.newformat === null || requestObj.newformat === undefined) {
            throw new Error('Required parameter "requestObj.newformat" was null or undefined when calling postTriangulateNew.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Triangulate whole file and save to original file
     * @param requestObj contains request parameters
     */
    public async postTriangulateOriginal(requestObj: model.postTriangulateOriginalRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTriangulateOriginal.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/triangulate/original";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTriangulateOriginal.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Triangulate part of the scene(Specified by OAP) and save the scene to different file 
     * @param requestObj contains request parameters
     */
    public async postTriangulatePart(requestObj: model.postTriangulatePartRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling postTriangulatePart.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/triangulate/part";
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling postTriangulatePart.');
        }

        // verify required parameter 'requestObj.objectaddressingpath' is not null or undefined
        if (requestObj.objectaddressingpath === null || requestObj.objectaddressingpath === undefined) {
            throw new Error('Required parameter "requestObj.objectaddressingpath" was null or undefined when calling postTriangulatePart.');
        }

        // verify required parameter 'requestObj.newfilename' is not null or undefined
        if (requestObj.newfilename === null || requestObj.newfilename === undefined) {
            throw new Error('Required parameter "requestObj.newfilename" was null or undefined when calling postTriangulatePart.');
        }

        // verify required parameter 'requestObj.newformat' is not null or undefined
        if (requestObj.newformat === null || requestObj.newformat === undefined) {
            throw new Error('Required parameter "requestObj.newformat" was null or undefined when calling postTriangulatePart.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "name", requestObj.name);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "objectaddressingpath", requestObj.objectaddressingpath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newformat", requestObj.newformat);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async storageExists(requestObj: model.storageExistsRequest): Promise<{response: http.ClientResponse, body: StorageExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling storageExists.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling storageExists.');
        }
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Upload file
     * @param requestObj contains request parameters
     */
    public async uploadFile(requestObj: model.uploadFileRequest): Promise<{response: http.ClientResponse, body: FilesUploadResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling uploadFile.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/3d/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling uploadFile.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling uploadFile.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            encoding: null,//very important
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

}
