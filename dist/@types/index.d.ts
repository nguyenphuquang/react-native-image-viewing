/**
 * Copyright (c) JOB TODAY S.A. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ImageURISource, ImageRequireSource } from "react-native";
export declare type Dimensions = {
    width: number;
    height: number;
};
export declare type Position = {
    x: number;
    y: number;
};
export declare type ImageSource = (ImageURISource | ImageRequireSource) & {
    [key: string]: any;
};
