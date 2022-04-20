const promptAction = async context => {
    const PROMPT_SETTINS = context.request.getEnvironment().prompt;
    if(PROMPT_SETTINS) {
        let promptResult = await context.app.prompt(`Confirmation required for environment: ${PROMPT_SETTINS}`, {label: `Write "${PROMPT_SETTINS}" to continue... `, cancelable: true});
        if (PROMPT_SETTINS !== promptResult) {
            throw promptResult
        }
    }
}

module.exports.requestHooks = [
    promptAction
];
