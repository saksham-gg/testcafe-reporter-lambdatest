import updateSessionName from './utils';

export default function () {
    return {
        async reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.testCount = testCount;

            this.write(`Running tests in: ${userAgents}`)
                .newline()
                .newline();

            const sessionIDs = [];

            const regex = /sessionID=([^&\s]+)/; // Regular expression to match 'sessionID=' followed by the session ID

            userAgents.forEach((segment) => {
                const match = segment.match(regex);

                if (match && match[1]) sessionIDs.push(match[1]);
            });

            this.sessions = sessionIDs;
        },

        async reportFixtureStart (name) {
            this.currentFixtureName = name;

        },

        async reportTestDone (name) {
            this.write('Test is completed: ');
            this.write(name)
                .newline();
        },

        async reportTaskDone (endTime, passed, warnings, result) {
            const durationMs  = endTime - this.startTime;
            const durationStr = this.moment.duration(durationMs).format('h[h] mm[m] ss[s]');

            let footer = result.failedCount ? `${result.failedCount}/${this.testCount} failed` : `${result.passedCount} passed`;

            footer += ` (Duration: ${durationStr})`;
            footer += ` (Skipped: ${result.skippedCount})`;
            footer += ` (Warnings: ${warnings.length})`;

            this.write(footer)
                .newline();
        },

        async reportTestStart (name, meta, testStartInfo) {
            this.write(`Starting test at ${testStartInfo.startTime.toLocaleTimeString()}: ${name} (${meta.severity})`) 
                .newline(); 

            if(this.sessions.length > 0) {
                try {
                    this.write('Updating session name...')
                        .newline();
                    updateSessionName(this.sessions[0], name);
                    this.sessions.shift();
                } 
                catch (error) {
                    this.write(`Error updating session name: ${error.message}`)
                        .newline();
                }
            }
        }

    };
}
