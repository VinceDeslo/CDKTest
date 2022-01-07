import { Stack, App, StackProps, Duration } from '@aws-cdk/core';
import { Function, Runtime, Code }from '@aws-cdk/aws-lambda';

export class LambdaStack extends Stack {
    constructor(scope: App, id: string, props?: StackProps) {
        super(scope, id, props);

        new Function(this, 'HelloHandler', {
            runtime: Runtime.NODEJS_14_X,
            code: Code.fromAsset('./src/lambda'),
            functionName: 'LambdaFunc',
            handler: 'index.handler',
            memorySize: 1024,
            timeout: Duration.seconds(5)
        });
    }
}

