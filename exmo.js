function replaceRepeaterInChannelDef(channelDef, repeater) {
    // Assuming channelDef is an array of objects or a single object
    if (!channelDef) {
        return; // handle case where channelDef is null or undefined
    }

    // Logic to find and replace the repeater
    // This depends on the structure of channelDef
    
    // Example: If channelDef is an array of objects
    for (let i = 0; i < channelDef.length; i++) {
        if (channelDef[i].type === 'repeater') {
            channelDef[i] = repeater; // Replace the repeater object
            break; // Assuming we only replace the first occurrence
        }
    }

    // Example: If channelDef is a single object
    // Uncomment this block if channelDef is a single object
    /*
    if (channelDef.type === 'repeater') {
        channelDef = repeater; // Replace the repeater object
    }
    */

    return channelDef;
}
