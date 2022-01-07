#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTestStack } from '../lib/aws_cdk_test-stack';

import { environment } from '../lib/utils/environment';

const app = new cdk.App();

new AwsCdkTestStack(app, 'AwsCdkTestStack', { env: environment });

