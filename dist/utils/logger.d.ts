/// <reference types="winston" />
/**
 * Define a custom Logger using winston
 */
import * as winston from "winston";
export declare const logger: winston.LoggerInstance;
export declare function disableConsoleLog(): void;
