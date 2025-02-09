import { handlerPath } from "@libs/handler-resolver";

//report generation
export const generateReport = {
    handler: `${handlerPath(__dirname)}/handler.generateReport`,
    description: 'A function that generates a report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'generateReport/',
                cors: true
            },
        },
    ],
};

//report publishing
export const publishReport = {
    handler: `${handlerPath(__dirname)}/handler.publishReport`,
    description: 'A function that publishes a report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'publishReport/',
                cors: true
            },
        },
    ],
};

//report publishing
export const unpublishReport = {
    handler: `${handlerPath(__dirname)}/handler.unpublishReport`,
    description: 'A function that unpublishes a report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'unpublishReport/',
                cors: true
            },
        },
    ],
};

//share report
export const shareReport = {
    handler: `${handlerPath(__dirname)}/handler.shareReport`,
    description: 'A function that shares a report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'shareReport/',
                cors: true
            },
        },
    ],
};

//retreival of all reports
export const getAllPublishedReports = {
    handler: `${handlerPath(__dirname)}/handler.getAllPublishedReports`,
    description: 'A function that returns all of the reports in the system.',
    events: [
        {
            http: {
                method: 'get',
                path: 'getAllPublishedReports/',
                cors: true
            },
        },
    ],
};

//retrieval of drafts
export const getAllMyDraftReports = {
    handler: `${handlerPath(__dirname)}/handler.getAllMyDraftReports`,
    description: 'A function that returns all the users reports.',
    events: [
        {
            http: {
                method: 'post',
                path: 'getAllMyReports/',
                cors: true
            },
        },
    ],
};

//retrevial of a report
export const getReport = {
    handler: `${handlerPath(__dirname)}/handler.getReport`,
    description: 'A function that returns the content of a specific report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'getReport/',
                cors: true
            },
        },
    ],
};

//cloning of a report
export const cloneReport = {
    handler: `${handlerPath(__dirname)}/handler.cloneReport`,
    description: 'A function that clones a report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'cloneReport/',
                cors: true
            },
        },
    ],
};

//Adding a custom tweet
export const addCustomTweet = {
    handler: `${handlerPath(__dirname)}/handler.addCustomTweet`,
    description: 'A function that adds customer tweets.',
    events: [
        {
            http: {
                method: 'post',
                path: 'addCustomTweet/',
                cors: true
            },
        },
    ],
};

//Deleting a result set
export const deleteResultSet = {
    handler: `${handlerPath(__dirname)}/handler.deleteResultSet`,
    description: 'A function that deletes a resultSet.',
    events: [
        {
            http: {
                method: 'post',
                path: 'deleteResultSet/',
                cors: true
            },
        },
    ],
};

//Deleting a result report
export const deleteDraftReport = {
    handler: `${handlerPath(__dirname)}/handler.deleteDraftReport`,
    description: 'A function that deletes a draft report.',
    events: [
        {
            http: {
                method: 'post',
                path: 'deleteDraftReport/',
                cors: true
            },
        },
    ],
};