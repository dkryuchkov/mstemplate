const LogLevels = {
    'DEBUG': 'DEBUG',
    'INFO': 'INFO',
    'WARN': 'WARN',
    'ERROR': 'ERROR',
}

const Levels = [LogLevels.DEBUG, LogLevels.INFO, LogLevels.WARN, LogLevels.ERROR]

class LogWrapper {

    constructor(level) {
        this.level = ((level == undefined || LogLevels[level.toUpperCase()] == undefined) ? LogLevels.INFO : LogLevels[level.toUpperCase()])
        this.cgid = ''
        this.correlationId = ''
    }

    setCgid(cgid) {
        this.cgid = cgid
    }

    setCorrelationId(correlationId) {
        this.correlationId = correlationId
    }

    debug(text) {
        if (this.okToLog(LogLevels.DEBUG)) {
            this.formatAndLog(LogLevels.DEBUG, text)
        }
    };

    info(text) {
        if (this.okToLog(LogLevels.INFO)) {
            this.formatAndLog(LogLevels.INFO, text)
        }
    };

    log(text) {
        if (this.okToLog(LogLevels.INFO)) {
            this.formatAndLog(LogLevels.INFO, text)
        }
    };


    warn(text) {
        if (this.okToLog(LogLevels.WARN)) {
            this.formatAndLog(LogLevels.WARN, text)
        }
    };

    error(text) {
        if (this.okToLog(LogLevels.ERROR)) {
            this.formatAndLog(LogLevels.ERROR, text)
        }
    };

    formatAndLog(level, message) {
        var format = {
            "timeStamp": new Date().getTime(),
            "message": message,
            "level": level,
            "cgid": this.cgid,
            "correlationId": this.correlationId,
            "techService": "Enterprise Customer Master",
            "application": "ODS",
            "functionalGroup": process.env.LOG_FUNCTIONAL_GROUP,
            "component": process.env.LOG_COMPONENT
        }
        console.log(JSON.stringify(format))
    };

    okToLog(level) {
        const index = Levels.indexOf(level);
        const levelIndex = Levels.indexOf(this.level);
        return index >= levelIndex;
    };

}

module.exports = LogWrapper
module.exports.LogLevels = LogLevels