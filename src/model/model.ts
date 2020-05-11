/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

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

export class AccessTokenResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "expires",
            baseName: ".expires",
            type: "string",
        },        
        {
            name: "accessToken",
            baseName: "access_token",
            type: "string",
        },        
        {
            name: "issued",
            baseName: ".issued",
            type: "string",
        },        
        {
            name: "clientRefreshTokenLifeTimeInMinutes",
            baseName: "clientRefreshTokenLifeTimeInMinutes",
            type: "string",
        },        
        {
            name: "expiresIn",
            baseName: "expires_in",
            type: "number",
        },        
        {
            name: "tokenType",
            baseName: "token_type",
            type: "string",
        },        
        {
            name: "clientId",
            baseName: "client_id",
            type: "string",
        },        
        {
            name: "refreshToken",
            baseName: "refresh_token",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AccessTokenResponse.attributeTypeMap;
    }

    public expires: string;
    
    public accessToken: string;
    
    public issued: string;
    
    public clientRefreshTokenLifeTimeInMinutes: string;
    
    public expiresIn: number;
    
    public tokenType: string;
    
    public clientId: string;
    
    public refreshToken: string;
    
    public constructor(init?: Partial<AccessTokenResponse>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Box Entity
 */
export class Box {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "length",
            baseName: "Length",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "lengthSegments",
            baseName: "LengthSegments",
            type: "number",
        },        
        {
            name: "widthSegments",
            baseName: "WidthSegments",
            type: "number",
        },        
        {
            name: "heightSegments",
            baseName: "HeightSegments",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Box.attributeTypeMap;
    }

    /**
     * Gets or sets the length of the box             
     */
    public length: number;
    
    /**
     * Gets or sets the width of the box
     */
    public width: number;
    
    /**
     * Gets or sets the height of the box
     */
    public height: number;
    
    /**
     * Gets or sets the name of the box             
     */
    public name: string;
    
    /**
     * Gets or sets the lengthSegments of the box
     */
    public lengthSegments: number;
    
    /**
     * Gets or sets the widthSegments of the box
     */
    public widthSegments: number;
    
    /**
     * Gets or sets the heightSegments of the box
     */
    public heightSegments: number;
    
    public constructor(init?: Partial<Box>) {
        
        Object.assign(this, init);
    }        
}

export class Cylinder {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "radiusTop",
            baseName: "RadiusTop",
            type: "number",
        },        
        {
            name: "radiusBottom",
            baseName: "RadiusBottom",
            type: "number",
        },        
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },        
        {
            name: "radialSegments",
            baseName: "RadialSegments",
            type: "number",
        },        
        {
            name: "heightSegments",
            baseName: "HeightSegments",
            type: "number",
        },        
        {
            name: "openEnded",
            baseName: "OpenEnded",
            type: "boolean",
        },        
        {
            name: "thetaStart",
            baseName: "ThetaStart",
            type: "number",
        },        
        {
            name: "thetaLength",
            baseName: "ThetaLength",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Cylinder.attributeTypeMap;
    }

    /**
     * Gets or sets the name of the cylinder             
     */
    public name: string;
    
    /**
     * Gets or sets the radius of cylinder's top cap.
     */
    public radiusTop: number;
    
    /**
     * Gets or sets the radius bottoof cylinder's bottom cap.             
     */
    public radiusBottom: number;
    
    /**
     * Gets or sets the height of the cylinder.
     */
    public height: number;
    
    /**
     * Gets or sets the radial segments.
     */
    public radialSegments: number;
    
    /**
     * Gets or sets the height segments.
     */
    public heightSegments: number;
    
    /**
     * Gets or sets a value indicating whether this Aspose.ThreeD.Entities.Cylinder open ended. The default value is false.
     */
    public openEnded: boolean;
    
    /**
     * Gets or sets the theta start. The default value is 0.             
     */
    public thetaStart: number;
    
    /**
     * Gets or sets the length of the theta. The default value is 2p.
     */
    public thetaLength: number;
    
    public constructor(init?: Partial<Cylinder>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "usedSize",
            baseName: "UsedSize",
            type: "number",
        },        
        {
            name: "totalSize",
            baseName: "TotalSize",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;
    
    /**
     * Total disc space.
     */
    public totalSize: number;
    
    public constructor(init?: Partial<DiscUsage>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Entity class             
 */
export class Entity {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "box",
            baseName: "Box",
            type: "Box",
        },        
        {
            name: "cylinder",
            baseName: "Cylinder",
            type: "Cylinder",
        },        
        {
            name: "sphere",
            baseName: "Sphere",
            type: "Sphere",
        },        
        {
            name: "torus",
            baseName: "Torus",
            type: "Torus",
        },        
        {
            name: "plane",
            baseName: "Plane",
            type: "Plane",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Entity.attributeTypeMap;
    }

    /**
     * Box/Cylinder/Sphere/Torus/Plane
     */
    public type: string;
    
    /**
     * Gets or sets Box entity
     */
    public box: Box;
    
    /**
     * Gets or sets Cylinder entity
     */
    public cylinder: Cylinder;
    
    /**
     * Gets or sets Sphere entity
     */
    public sphere: Sphere;
    
    /**
     * Gets or sets Torus entity
     */
    public torus: Torus;
    
    /**
     * Gets or sets Plane entity
     */
    public plane: Plane;
    
    public constructor(init?: Partial<Entity>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        },        
        {
            name: "date",
            baseName: "Date",
            type: "Date",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;
    
    /**
     * Date
     */
    public date: Date;
    
    public constructor(init?: Partial<ErrorDetails>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<FileVersion>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;
    
    public constructor(init?: Partial<FileVersions>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;
    
    public constructor(init?: Partial<FilesList>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "Array<string>",
        },        
        {
            name: "errors",
            baseName: "Errors",
            type: "Array<Error>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;
    
    /**
     * List of errors.
     */
    public errors: Array<Error>;
    
    public constructor(init?: Partial<FilesUploadResult>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Parametric Modeling
 */
export class ModelData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "transform",
            baseName: "Transform",
            type: "Transform",
        },        
        {
            name: "entity",
            baseName: "Entity",
            type: "Entity",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelData.attributeTypeMap;
    }

    /**
     * e.g Node
     */
    public type: string;
    
    public transform: Transform;
    
    public entity: Entity;
    
    public constructor(init?: Partial<ModelData>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },        
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },        
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },        
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;
    
    /**
     * Message             
     */
    public message: string;
    
    /**
     * Description             
     */
    public description: string;
    
    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;
    
    public constructor(init?: Partial<ModelError>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;
    
    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;
    
    public constructor(init?: Partial<ObjectExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Plane Entity
 */
export class Plane {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "length",
            baseName: "Length",
            type: "number",
        },        
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },        
        {
            name: "lengthSegments",
            baseName: "LengthSegments",
            type: "number",
        },        
        {
            name: "widthSegments",
            baseName: "WidthSegments",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Plane.attributeTypeMap;
    }

    /**
     * The name of Plane
     */
    public name: string;
    
    /**
     * Gets or sets the length of the plane.             
     */
    public length: number;
    
    /**
     * Gets or sets the width of the plane             
     */
    public width: number;
    
    /**
     * Gets or sets the length segments.             
     */
    public lengthSegments: number;
    
    /**
     * Gets or sets the width segments.
     */
    public widthSegments: number;
    
    public constructor(init?: Partial<Plane>) {
        
        Object.assign(this, init);
    }        
}

export class SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "SaveOptions.SaveFormatEnum",
        },        
        {
            name: "lookupPaths",
            baseName: "LookupPaths",
            type: "Array<string>",
        },        
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "fileFormat",
            baseName: "FileFormat",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptions.attributeTypeMap;
    }

    /**
     * Gets or sets  of the SaveFormat.
     */
    public saveFormat: SaveOptions.SaveFormatEnum;
    
    /**
     * Some files like OBJ depends on external file, the lookup paths will allows Aspose.3D to look for external file to load
     */
    public lookupPaths: Array<string>;
    
    /**
     * The file name of the exporting/importing scene. This is optional, but useful when serialize external assets like OBJ's material.
     */
    public fileName: string;
    
    /**
     * The file format,like FBX,U3D,PDF ....
     */
    public fileFormat: string;
    
    public constructor(init?: Partial<SaveOptions>) {
        
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SaveOptions {
    export enum SaveFormatEnum {
        AMF = 0 as any,
        ASE = 1 as any,
        Aspose3DWeb = 2 as any,
        Collada = 3 as any,
        Discreet3DS = 4 as any,
        Draco = 5 as any,
        DXF = 6 as any,
        FBX = 7 as any,
        GLTF = 8 as any,
        HTML = 9 as any,
        JT = 10 as any,
        Microsoft3MF = 11 as any,
        Obj = 12 as any,
        PDF = 13 as any,
        PLY = 14 as any,
        Rvm = 15 as any,
        STL = 16 as any,
        U3D = 17 as any,
        VRML = 18 as any,
        X = 19 as any,
    }
}
// tslint:enable:quotemark
/**
 * The Sphere Entity
 */
export class Sphere {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "widthSegments",
            baseName: "WidthSegments",
            type: "number",
        },        
        {
            name: "heightSegments",
            baseName: "HeightSegments",
            type: "number",
        },        
        {
            name: "phiStart",
            baseName: "PhiStart",
            type: "number",
        },        
        {
            name: "phiLength",
            baseName: "PhiLength",
            type: "number",
        },        
        {
            name: "thetaStart",
            baseName: "ThetaStart",
            type: "number",
        },        
        {
            name: "thetaLength",
            baseName: "ThetaLength",
            type: "number",
        },        
        {
            name: "radius",
            baseName: "Radius",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Sphere.attributeTypeMap;
    }

    /**
     * Gets or sets the Name of Sphere.
     */
    public name: string;
    
    /**
     * Gets or sets the width segments.
     */
    public widthSegments: number;
    
    /**
     * Gets or sets the height segments.             
     */
    public heightSegments: number;
    
    /**
     * Gets or sets the phi start.             
     */
    public phiStart: number;
    
    /**
     * Gets or sets the length of the phi.
     */
    public phiLength: number;
    
    /**
     * Gets or sets the theta start.             
     */
    public thetaStart: number;
    
    /**
     * Gets or sets the length of the theta.
     */
    public thetaLength: number;
    
    /**
     * Gets or sets the radius 
     */
    public radius: number;
    
    public constructor(init?: Partial<Sphere>) {
        
        Object.assign(this, init);
    }        
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;
    
    public constructor(init?: Partial<StorageExist>) {
        
        Object.assign(this, init);
    }        
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },        
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },        
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },        
        {
            name: "path",
            baseName: "Path",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;
    
    /**
     * True if it is a folder.
     */
    public isFolder: boolean;
    
    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;
    
    /**
     * File or folder size.
     */
    public size: number;
    
    /**
     * File or folder path.
     */
    public path: string;
    
    public constructor(init?: Partial<StorageFile>) {
        
        Object.assign(this, init);
    }        
}

/**
 * The Torus Entity class
 */
export class Torus {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },        
        {
            name: "radius",
            baseName: "Radius",
            type: "number",
        },        
        {
            name: "tube",
            baseName: "Tube",
            type: "number",
        },        
        {
            name: "radialSegments",
            baseName: "RadialSegments",
            type: "number",
        },        
        {
            name: "tubularSegments",
            baseName: "TubularSegments",
            type: "number",
        },        
        {
            name: "arc",
            baseName: "Arc",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Torus.attributeTypeMap;
    }

    /**
     * Gets or sets the Name of the torus.
     */
    public name: string;
    
    /**
     * Gets or sets the radius of the torus.             
     */
    public radius: number;
    
    /**
     * Gets or sets the radius of the tube.
     */
    public tube: number;
    
    /**
     * Gets or sets the radial segments.
     */
    public radialSegments: number;
    
    /**
     * Gets or sets the tubular segments.
     */
    public tubularSegments: number;
    
    /**
     * Gets or sets the arc.
     */
    public arc: number;
    
    public constructor(init?: Partial<Torus>) {
        
        Object.assign(this, init);
    }        
}

/**
 * A transform contains information that allow access to object's translate/scale/rotation or transform matrix at minimum cost This is used by local transform.             
 */
export class Transform {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "translation",
            baseName: "Translation",
            type: "Vector3",
        },        
        {
            name: "scale",
            baseName: "Scale",
            type: "Vector3",
        },        
        {
            name: "preRotation",
            baseName: "PreRotation",
            type: "Vector3",
        },        
        {
            name: "postRotation",
            baseName: "PostRotation",
            type: "Vector3",
        },        
        {
            name: "eulerAngles",
            baseName: "EulerAngles",
            type: "Vector3",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Transform.attributeTypeMap;
    }

    /**
     * Gets or sets the translation
     */
    public translation: Vector3;
    
    /**
     * Gets or sets the scale
     */
    public scale: Vector3;
    
    /**
     * Gets or sets the pre-rotation represented in degree
     */
    public preRotation: Vector3;
    
    /**
     * Gets or sets the post-rotation represented in degree
     */
    public postRotation: Vector3;
    
    /**
     * Gets or sets the rotation represented in euler angles, measured in degree             
     */
    public eulerAngles: Vector3;
    
    public constructor(init?: Partial<Transform>) {
        
        Object.assign(this, init);
    }        
}

/**
 * A vector with three components.             
 */
export class Vector3 {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "x",
            baseName: "x",
            type: "number",
        },        
        {
            name: "y",
            baseName: "y",
            type: "number",
        },        
        {
            name: "z",
            baseName: "z",
            type: "number",
        },        
        {
            name: "length2",
            baseName: "Length2",
            type: "number",
        },        
        {
            name: "length",
            baseName: "Length",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Vector3.attributeTypeMap;
    }

    /**
     * The x component.
     */
    public x: number;
    
    /**
     * The y component.
     */
    public y: number;
    
    /**
     * The z component.
     */
    public z: number;
    
    /**
     * Gets the square of the length.             
     */
    public length2: number;
    
    /**
     * Gets the length of this vector.
     */
    public length: number;
    
    public constructor(init?: Partial<Vector3>) {
        
        Object.assign(this, init);
    }        
}

export class AMFSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "enableCompression",
            baseName: "EnableCompression",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AMFSaveOption.attributeTypeMap);
    }

    /**
     * Whether to use compression to reduce the final file size, default value is true.
     */
    public enableCompression: boolean;
    
    public constructor(init?: Partial<AMFSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace AMFSaveOption {
}
// tslint:enable:quotemark
export class ColladaSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "indented",
            baseName: "Indented",
            type: "boolean",
        },        
        {
            name: "transformStyle",
            baseName: "TransformStyle",
            type: "ColladaSaveOption.TransformStyleEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ColladaSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets whether the exported XML document is indented.
     */
    public indented: boolean;
    
    /**
     * The node's transform style of node.
     */
    public transformStyle: ColladaSaveOption.TransformStyleEnum;
    
    public constructor(init?: Partial<ColladaSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ColladaSaveOption {
    export enum TransformStyleEnum {
        Components = 0 as any,
        Matrix = 1 as any,
    }
}
// tslint:enable:quotemark
export class Discreet3DSSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "exportLight",
            baseName: "ExportLight",
            type: "boolean",
        },        
        {
            name: "exportCamera",
            baseName: "ExportCamera",
            type: "boolean",
        },        
        {
            name: "duplicatedNameSeparator",
            baseName: "DuplicatedNameSeparator",
            type: "string",
        },        
        {
            name: "duplicatedNameCounterBase",
            baseName: "DuplicatedNameCounterBase",
            type: "number",
        },        
        {
            name: "duplicatedNameCounterFormat",
            baseName: "DuplicatedNameCounterFormat",
            type: "string",
        },        
        {
            name: "masterScale",
            baseName: "MasterScale",
            type: "number",
        },        
        {
            name: "gammaCorrectedColor",
            baseName: "GammaCorrectedColor",
            type: "boolean",
        },        
        {
            name: "flipCoordinateSystem",
            baseName: "FlipCoordinateSystem",
            type: "boolean",
        },        
        {
            name: "highPreciseColor",
            baseName: "HighPreciseColor",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Discreet3DSSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets whether export all lights in the scene.
     */
    public exportLight: boolean;
    
    /**
     * Gets or sets whether export all cameras in the scene
     */
    public exportCamera: boolean;
    
    /**
     * The separator between object's name and the duplicated counter, default value is \"_\". When scene contains objects that use the same name, Aspose.3D 3DS exporter will generate a different name for the object. For example there's two nodes named \"Box\", the first node will have a name \"Box\", and the second node will get a new name \"Box_2\" using the default configuration
     */
    public duplicatedNameSeparator: string;
    
    /**
     * The counter used by generating new name for duplicated names
     */
    public duplicatedNameCounterBase: number;
    
    /**
     * The format of the duplicated counter, default value is empty string.
     */
    public duplicatedNameCounterFormat: string;
    
    /**
     * Gets or sets the master scale used in exporting.
     */
    public masterScale: number;
    
    /**
     * Gets or sets the GammaCorrectedColor.
     */
    public gammaCorrectedColor: boolean;
    
    /**
     * Gets or sets flip coordinate system of control points/normal during importing/exporting..
     */
    public flipCoordinateSystem: boolean;
    
    /**
     * Gets or sets the HighPreciseColor.
     */
    public highPreciseColor: boolean;
    
    public constructor(init?: Partial<Discreet3DSSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace Discreet3DSSaveOption {
}
// tslint:enable:quotemark
export class DracoSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "positionBits",
            baseName: "PositionBits",
            type: "number",
        },        
        {
            name: "textureCoordinateBits",
            baseName: "TextureCoordinateBits",
            type: "number",
        },        
        {
            name: "colorBits",
            baseName: "ColorBits",
            type: "number",
        },        
        {
            name: "normalBits",
            baseName: "NormalBits",
            type: "number",
        },        
        {
            name: "compressionLevel",
            baseName: "CompressionLevel",
            type: "DracoSaveOption.CompressionLevelEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DracoSaveOption.attributeTypeMap);
    }

    /**
     * Quantization bits for position, default value is 14
     */
    public positionBits: number;
    
    /**
     * Quantization bits for texture coordinate, default value is 12
     */
    public textureCoordinateBits: number;
    
    /**
     * Quantization bits for vertex color, default value is 10
     */
    public colorBits: number;
    
    /**
     * Quantization bits for normal vectors, default value is 10
     */
    public normalBits: number;
    
    /**
     * Compression level for draco file
     */
    public compressionLevel: DracoSaveOption.CompressionLevelEnum;
    
    public constructor(init?: Partial<DracoSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DracoSaveOption {
    export enum CompressionLevelEnum {
        NoCompression = 0 as any,
        Fast = 1 as any,
        Standard = 2 as any,
        Optimal = 3 as any,
    }
}
// tslint:enable:quotemark
export class FBXSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "enableCompression",
            baseName: "EnableCompression",
            type: "boolean",
        },        
        {
            name: "foldRepeatedCurveData",
            baseName: "FoldRepeatedCurveData",
            type: "boolean",
        },        
        {
            name: "exportLegacyMaterialProperties",
            baseName: "ExportLegacyMaterialProperties",
            type: "boolean",
        },        
        {
            name: "videoForTexture",
            baseName: "VideoForTexture",
            type: "boolean",
        },        
        {
            name: "generateVertexElementMaterial",
            baseName: "GenerateVertexElementMaterial",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FBXSaveOption.attributeTypeMap);
    }

    /**
     *  Compression large binary data in the FBX file, default value is true
     */
    public enableCompression: boolean;
    
    /**
     * Gets or sets whether reuse repeated curve data by increasing last data's ref count
     */
    public foldRepeatedCurveData: boolean;
    
    /**
     * Gets or sets whether export legacy material properties, used for back compatibility. This option is turned on by default
     */
    public exportLegacyMaterialProperties: boolean;
    
    /**
     * Gets or sets whether generate a Video instance for Aspose.ThreeD.Shading.Texture when exporting as FBX.
     */
    public videoForTexture: boolean;
    
    /**
     * Gets or sets whether always generate a Aspose.ThreeD.Entities.VertexElementMaterial for geometries if the attached node contains materials. This is turned off by default.
     */
    public generateVertexElementMaterial: boolean;
    
    public constructor(init?: Partial<FBXSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace FBXSaveOption {
}
// tslint:enable:quotemark
/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "versionId",
            baseName: "VersionId",
            type: "string",
        },        
        {
            name: "isLatest",
            baseName: "IsLatest",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;
    
    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;
    
    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class GLTFSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "prettyPrint",
            baseName: "PrettyPrint",
            type: "boolean",
        },        
        {
            name: "embedAssets",
            baseName: "EmbedAssets",
            type: "boolean",
        },        
        {
            name: "useCommonMaterials",
            baseName: "UseCommonMaterials",
            type: "boolean",
        },        
        {
            name: "flipTexCoordV",
            baseName: "FlipTexCoordV",
            type: "boolean",
        },        
        {
            name: "bufferFile",
            baseName: "BufferFile",
            type: "boolean",
        },        
        {
            name: "saveExtras",
            baseName: "SaveExtras",
            type: "boolean",
        },        
        {
            name: "dracoCompression",
            baseName: "DracoCompression",
            type: "boolean",
        },        
        {
            name: "fileContentType",
            baseName: "FileContentType",
            type: "GLTFSaveOption.FileContentTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GLTFSaveOption.attributeTypeMap);
    }

    /**
     * The JSON content of GLTF file is indented for human reading, default value is false.
     */
    public prettyPrint: boolean;
    
    /**
     * Embed all external assets as base64 into single file in ASCII mode, default value is false.
     */
    public embedAssets: boolean;
    
    /**
     * Serialize materials using KHR common material extensions, default value is false. Set this to false will cause Aspose.3D export a set of vertex/fragment shader if Aspose.ThreeD.Formats.GLTFSaveOptions.ExportShaders
     */
    public useCommonMaterials: boolean;
    
    /**
     * Flip texture coordinate v(t) component, default value is true.
     */
    public flipTexCoordV: boolean;
    
    /**
     * The file name of the external buffer file used to store binary data. If this file is not specified, Aspose.3D will generate a name for you. This is ignored when export glTF in binary mode.
     */
    public bufferFile: boolean;
    
    /**
     * Save scene object's dynamic properties into 'extra' fields in the generated glTF file. This is useful to provide application-specific data. Default value is false..
     */
    public saveExtras: boolean;
    
    /**
     * Gets or sets whether to enable draco compression.
     */
    public dracoCompression: boolean;
    
    /**
     * Gets or sets  of the FileContent Style.
     */
    public fileContentType: GLTFSaveOption.FileContentTypeEnum;
    
    public constructor(init?: Partial<GLTFSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace GLTFSaveOption {
    export enum FileContentTypeEnum {
        Binary = 0 as any,
        ASCII = 1 as any,
    }
}
// tslint:enable:quotemark
export class HTMLSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "showGrid",
            baseName: "ShowGrid",
            type: "boolean",
        },        
        {
            name: "showRulers",
            baseName: "ShowRulers",
            type: "boolean",
        },        
        {
            name: "showUI",
            baseName: "ShowUI",
            type: "boolean",
        },        
        {
            name: "orientationBox",
            baseName: "OrientationBox",
            type: "boolean",
        },        
        {
            name: "upVector",
            baseName: "UpVector",
            type: "string",
        },        
        {
            name: "farPlane",
            baseName: "FarPlane",
            type: "number",
        },        
        {
            name: "nearPlane",
            baseName: "NearPlane",
            type: "number",
        },        
        {
            name: "lookAt",
            baseName: "LookAt",
            type: "Vector3",
        },        
        {
            name: "cameraPosition",
            baseName: "CameraPosition",
            type: "Vector3",
        },        
        {
            name: "fieldOfView",
            baseName: "FieldOfView",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HTMLSaveOption.attributeTypeMap);
    }

    /**
     *  Display a grid in the scene. Default value is true.
     */
    public showGrid: boolean;
    
    /**
     *  Display rulers of x/y/z axises in the scene to measure the model. Default value is false
     */
    public showRulers: boolean;
    
    /**
     * Display a simple UI in the scene. Default value is true
     */
    public showUI: boolean;
    
    /**
     * Display a orientation box. Default value is true.
     */
    public orientationBox: boolean;
    
    /**
     * Gets or sets the up vector, value can be \"x\"/\"y\"/\"z\", default value is \"y\".
     */
    public upVector: string;
    
    /**
     * Gets or sets the far plane of the camera, default value is 1000
     */
    public farPlane: number;
    
    /**
     * Gets or sets the near plane of the camera, default value is 1
     */
    public nearPlane: number;
    
    /**
     * Gets or sets the default look at position, default value is (0, 0, 0)
     */
    public lookAt: Vector3;
    
    /**
     * Gets or sets the initial position of the camera, default value is (10, 10, 10)
     */
    public cameraPosition: Vector3;
    
    /**
     *  Gets or sets the field of the view, default value is 45, measured in degree
     */
    public fieldOfView: number;
    
    public constructor(init?: Partial<HTMLSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HTMLSaveOption {
}
// tslint:enable:quotemark
export class ObjSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "verbose",
            baseName: "Verbose",
            type: "boolean",
        },        
        {
            name: "serializeW",
            baseName: "SerializeW",
            type: "boolean",
        },        
        {
            name: "enableMaterials",
            baseName: "EnableMaterials",
            type: "boolean",
        },        
        {
            name: "flipCoordinateSystem",
            baseName: "FlipCoordinateSystem",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ObjSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets whether generate comments for each section.
     */
    public verbose: boolean;
    
    /**
     * Gets or sets whether serialize W component in model's vertex position.
     */
    public serializeW: boolean;
    
    /**
     * Gets or sets whether import/export materials for each object.
     */
    public enableMaterials: boolean;
    
    /**
     * Gets or sets whether flip coordinate system of control points/normal during importing/exporting.
     */
    public flipCoordinateSystem: boolean;
    
    public constructor(init?: Partial<ObjSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ObjSaveOption {
}
// tslint:enable:quotemark
export class PdfSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "flipCoordinateSystem",
            baseName: "FlipCoordinateSystem",
            type: "boolean",
        },        
        {
            name: "renderMode",
            baseName: "RenderMode",
            type: "PdfSaveOption.RenderModeEnum",
        },        
        {
            name: "lightingScheme",
            baseName: "LightingScheme",
            type: "PdfSaveOption.LightingSchemeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets to flip the coordinate system of the scene during exporting.
     */
    public flipCoordinateSystem: boolean;
    
    /**
     * Render mode specifies the style in which the 3D artwork is rendered.
     */
    public renderMode: PdfSaveOption.RenderModeEnum;
    
    /**
     * Render mode specifies the style in which the 3D artwork is rendered.
     */
    public lightingScheme: PdfSaveOption.LightingSchemeEnum;
    
    public constructor(init?: Partial<PdfSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOption {
    export enum RenderModeEnum {
        Solid = 0 as any,
        SolidWireframe = 1  as any,
        Transparent = 2 as any,
        TransparentWireframe = 3 as any,
        BoundingBox = 4 as any,
        TransparentBoundingBox = 5 as any,
        TransparentBoundingBoxOutline = 6 as any,
        Wireframe = 7 as any,
        ShadedWireframe = 8 as any,
        HiddenWireframe = 9 as any,
        Vertices = 10  as any,
        ShadedVertices = 11 as any,
        Illustration = 12 as any,
        SolidOutline = 13 as any,
        ShadedIllustration = 14 as any,
    }
    export enum LightingSchemeEnum {
        Artwork = 0 as any,
        None = 1 as any,
        White = 2 as any,
        Day = 3 as any,
        Night = 4 as any,
        Hard = 5 as any,
        Primary = 6 as any,
        Blue = 7 as any,
        Red = 8 as any,
        Cube = 9 as any,
        CAD = 10 as any,
        Headlamp = 11 as any,
    }
}
// tslint:enable:quotemark
export class PlySaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "flipCoordinate",
            baseName: "FlipCoordinate",
            type: "boolean",
        },        
        {
            name: "vertexElement",
            baseName: "VertexElement",
            type: "string",
        },        
        {
            name: "positionComponents",
            baseName: "PositionComponents",
            type: "Array<string>",
        },        
        {
            name: "faceElement",
            baseName: "FaceElement",
            type: "string",
        },        
        {
            name: "faceProperty",
            baseName: "FaceProperty",
            type: "string",
        },        
        {
            name: "fileContentType",
            baseName: "FileContentType",
            type: "PlySaveOption.FileContentTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PlySaveOption.attributeTypeMap);
    }

    /**
     * Flip the coordinate while saving the scene, default value is true.
     */
    public flipCoordinate: boolean;
    
    /**
     * The element name for the vertex data, default value is \"vertex\".
     */
    public vertexElement: string;
    
    /**
     * The component names for position data, default value is (\"x\", \"y\", \"z\")
     */
    public positionComponents: Array<string>;
    
    /**
     * The element name for the face data, default value is face.
     */
    public faceElement: string;
    
    /**
     * The property name for the face data, default value is vertex_index.
     */
    public faceProperty: string;
    
    /**
     * Gets or sets  of the FileContent Style.
     */
    public fileContentType: PlySaveOption.FileContentTypeEnum;
    
    public constructor(init?: Partial<PlySaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PlySaveOption {
    export enum FileContentTypeEnum {
        Binary = 0 as any,
        ASCII = 1 as any,
    }
}
// tslint:enable:quotemark
export class RvmSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileNote",
            baseName: "FileNote",
            type: "string",
        },        
        {
            name: "author",
            baseName: "Author",
            type: "string",
        },        
        {
            name: "creationTime",
            baseName: "CreationTime",
            type: "string",
        },        
        {
            name: "fileContentType",
            baseName: "FileContentType",
            type: "RvmSaveOption.FileContentTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RvmSaveOption.attributeTypeMap);
    }

    /**
     * File note in the file header.
     */
    public fileNote: string;
    
    /**
     * Author information, default value is '3d@aspose'.
     */
    public author: string;
    
    /**
     * The timestamp that exported this file, default value is current time.
     */
    public creationTime: string;
    
    /**
     * Gets or sets  of the FileContent Style.
     */
    public fileContentType: RvmSaveOption.FileContentTypeEnum;
    
    public constructor(init?: Partial<RvmSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RvmSaveOption {
    export enum FileContentTypeEnum {
        Binary = 0 as any,
        ASCII = 1 as any,
    }
}
// tslint:enable:quotemark
export class STLSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "flipCoordinateSystem",
            baseName: "FlipCoordinateSystem",
            type: "boolean",
        },        
        {
            name: "fileContentType",
            baseName: "FileContentType",
            type: "STLSaveOption.FileContentTypeEnum",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(STLSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets whether flip coordinate system of control points/normal during exporting.
     */
    public flipCoordinateSystem: boolean;
    
    /**
     * Gets or sets  of the FileContent Style.
     */
    public fileContentType: STLSaveOption.FileContentTypeEnum;
    
    public constructor(init?: Partial<STLSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace STLSaveOption {
    export enum FileContentTypeEnum {
        Binary = 0 as any,
        ASCII = 1 as any,
    }
}
// tslint:enable:quotemark
export class U3DSaveOption extends SaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "flipCoordinateSystem",
            baseName: "FlipCoordinateSystem",
            type: "boolean",
        },        
        {
            name: "meshCompression",
            baseName: "MeshCompression",
            type: "boolean",
        },        
        {
            name: "exportNormals",
            baseName: "ExportNormals",
            type: "boolean",
        },        
        {
            name: "exportTextureCoordinates",
            baseName: "ExportTextureCoordinates",
            type: "boolean",
        },        
        {
            name: "exportVertexDiffuse",
            baseName: "ExportVertexDiffuse",
            type: "boolean",
        },        
        {
            name: "exportVertexSpecular",
            baseName: "ExportVertexSpecular",
            type: "boolean",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(U3DSaveOption.attributeTypeMap);
    }

    /**
     * Gets or sets whether flip coordinate system of control points/normal during importing/exporting.
     */
    public flipCoordinateSystem: boolean;
    
    /**
     * Gets or sets whether to enable mesh data compression.
     */
    public meshCompression: boolean;
    
    /**
     * Gets or sets whether to export normal data.
     */
    public exportNormals: boolean;
    
    /**
     * Gets or sets whether to export texture coordinates.
     */
    public exportTextureCoordinates: boolean;
    
    /**
     * Gets or sets whether to export vertex's diffuse color.
     */
    public exportVertexDiffuse: boolean;
    
    /**
     * Gets or sets whether to export vertex' specular color.
     */
    public exportVertexSpecular: boolean;
    
    public constructor(init?: Partial<U3DSaveOption>) {
        super(init);
        Object.assign(this, init);
    }        
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace U3DSaveOption {
}
// tslint:enable:quotemark
const enumsMap = {
    "SaveOptions.SaveFormatEnum": SaveOptions.SaveFormatEnum,
    "ColladaSaveOption.TransformStyleEnum": ColladaSaveOption.TransformStyleEnum,
    "DracoSaveOption.CompressionLevelEnum": DracoSaveOption.CompressionLevelEnum,
    "GLTFSaveOption.FileContentTypeEnum": GLTFSaveOption.FileContentTypeEnum,
    "PdfSaveOption.RenderModeEnum": PdfSaveOption.RenderModeEnum,
    "PdfSaveOption.LightingSchemeEnum": PdfSaveOption.LightingSchemeEnum,
    "PlySaveOption.FileContentTypeEnum": PlySaveOption.FileContentTypeEnum,
    "RvmSaveOption.FileContentTypeEnum": RvmSaveOption.FileContentTypeEnum,
    "STLSaveOption.FileContentTypeEnum": STLSaveOption.FileContentTypeEnum,
};

const typeMap = {
            AccessTokenResponse,
            Box,
            Cylinder,
            DiscUsage,
            Entity,
            ErrorDetails,
            FileVersions,
            FilesList,
            FilesUploadResult,
            ModelData,
            ModelError,
            ObjectExist,
            Plane,
            SaveOptions,
            Sphere,
            StorageExist,
            StorageFile,
            Torus,
            Transform,
            Vector3,
            AMFSaveOption,
            ColladaSaveOption,
            Discreet3DSSaveOption,
            DracoSaveOption,
            FBXSaveOption,
            FileVersion,
            GLTFSaveOption,
            HTMLSaveOption,
            ObjSaveOption,
            PdfSaveOption,
            PlySaveOption,
            RvmSaveOption,
            STLSaveOption,
            U3DSaveOption,
};

export {enumsMap, typeMap};

/**
 * Request model for copyFile operation.
 */
export class copyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;
    
    public constructor(init?: Partial<copyFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for copyFolder operation.
 */
export class copyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<copyFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for createFolder operation.
 */
export class createFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<createFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteFile operation.
 */
export class deleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;
    
    public constructor(init?: Partial<deleteFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteFolder operation.
 */
export class deleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;
    
    public constructor(init?: Partial<deleteFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for deleteNodes operation.
 */
export class deleteNodesRequest {
    /**
     * The name of the source file.
     */
    public name: string;

    /**
     * The object addressing path.
     */
    public objectaddressingpath: string;

    /**
     * The folder of the source file.
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<deleteNodesRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for downloadFile operation.
 */
export class downloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;
    
    public constructor(init?: Partial<downloadFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getDiscUsage operation.
 */
export class getDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<getDiscUsageRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getFileVersions operation.
 */
export class getFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<getFileVersionsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for getFilesList operation.
 */
export class getFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<getFilesListRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for moveFile operation.
 */
export class moveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;
    
    public constructor(init?: Partial<moveFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for moveFolder operation.
 */
export class moveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;
    
    public constructor(init?: Partial<moveFolderRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for oAuthPost operation.
 */
export class oAuthPostRequest {
    /**
     * Grant Type
     */
    public grantType: string;

    /**
     * App SID
     */
    public clientId: string;

    /**
     * App Key
     */
    public clientSecret: string;
    
    public constructor(init?: Partial<oAuthPostRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for objectExists operation.
 */
export class objectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;
    
    public constructor(init?: Partial<objectExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postConvertByFormat operation.
 */
export class postConvertByFormatRequest {
    /**
     * The name of the source file.
     */
    public name: string;

    /**
     * The format of the new file.
     */
    public newformat: string;

    /**
     * The name of the new file.
     */
    public newfilename: string;

    /**
     * The folder of the source file.
     */
    public folder: string;

    /**
     * Overwrite the source file? true or false.
     */
    public isOverwrite: boolean;

    /**
     * The storage type.
     */
    public storage: string;
    
    public constructor(init?: Partial<postConvertByFormatRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postConvertByOpt operation.
 */
export class postConvertByOptRequest {
    /**
     * The name of the source file.
     */
    public name: string;

    /**
     * The saveOptions to save the file
     */
    public saveOptions: SaveOptions;

    /**
     * The name of the new file
     */
    public newfilename: string;

    /**
     * The folder of the source file
     */
    public folder: string;

    /**
     * Overwrite the source file? true or false
     */
    public isOverwrite: boolean;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postConvertByOptRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postCreate operation.
 */
export class postCreateRequest {
    /**
     * The format of the new file.
     */
    public format: string;
    
    public constructor(init?: Partial<postCreateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postModel operation.
 */
export class postModelRequest {
    /**
     * The name of the source file.
     */
    public name: string;

    /**
     * ModelData struct.
     */
    public modeldata: ModelData;

    /**
     * new format of the source file.
     */
    public newformat: string;

    /**
     * The folder of the source file.
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postModelRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postPdfRawData operation.
 */
export class postPdfRawDataRequest {
    /**
     * The PDF file's mame
     */
    public name: string;

    /**
     * The file name for generated raw date
     */
    public multifileprefix: string;

    /**
     * The password to open the PDF
     */
    public password: string;

    /**
     * The folder for source file
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postPdfRawDataRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postSaveAsPart operation.
 */
export class postSaveAsPartRequest {
    /**
     * The name of the source file
     */
    public name: string;

    /**
     * The object addressing path
     */
    public objectaddressingpath: string;

    /**
     * The format of the new file
     */
    public newformat: string;

    /**
     * The name of the new file
     */
    public newfilename: string;

    /**
     * The folder of the source file
     */
    public folder: string;

    /**
     * Overwrite the source file? true or false
     */
    public isOverwrite: boolean;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postSaveAsPartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postSceneToFile operation.
 */
export class postSceneToFileRequest {
    /**
     * The PDF file's mame
     */
    public name: string;

    /**
     * The file name for extracted scene
     */
    public multifileprefix: string;

    /**
     * The format of new file
     */
    public newformat: string;

    /**
     * The password to open the PDF
     */
    public password: string;

    /**
     * The folder for source file
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postSceneToFileRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTriangulateNew operation.
 */
export class postTriangulateNewRequest {
    /**
     * The file's mame
     */
    public name: string;

    /**
     * The new file's mame
     */
    public newfilename: string;

    /**
     * The new file's format
     */
    public newformat: string;

    /**
     * The folder for source file
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postTriangulateNewRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTriangulateOriginal operation.
 */
export class postTriangulateOriginalRequest {
    /**
     * The file's mame
     */
    public name: string;

    /**
     * The folder for source file
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postTriangulateOriginalRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for postTriangulatePart operation.
 */
export class postTriangulatePartRequest {
    /**
     * The file's mame
     */
    public name: string;

    /**
     * The node or mesh getted by OAP.
     */
    public objectaddressingpath: string;

    /**
     * The new file's mame
     */
    public newfilename: string;

    /**
     * The new file's format
     */
    public newformat: string;

    /**
     * The folder for source file
     */
    public folder: string;

    /**
     * The storage type
     */
    public storage: string;
    
    public constructor(init?: Partial<postTriangulatePartRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for storageExists operation.
 */
export class storageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<storageExistsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for uploadFile operation.
 */
export class uploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;
    
    public constructor(init?: Partial<uploadFileRequest>) {        
        Object.assign(this, init);
    } 
}
