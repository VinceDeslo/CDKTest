#!/usr/bin/env node
import { App } from '@aws-cdk/core';

import { environment } from '../lib/utils/environment';
import { LambdaStack } from '../lib/lambda-stack';

const app = new App();

new LambdaStack(app, 'LambdaFunctionStack', {env: environment});
