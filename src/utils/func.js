export const matchPattern = (patternOrPatterns, url) => {
    const testPattern = (pattern, url) => {
        // 将模式转换为正则表达式
        let regex = pattern.replace(/\./g, '\\.'); // 先将 '.' 字符转义
        regex = regex.replace(/\*/g, '.*'); // 然后将 '*' 字符替换为 '.*
        regex = '^' + regex + '$';

        // 创建一个新的正则表达式对象
        let re = new RegExp(regex);

        // 测试URL是否匹配该模式
        return re.test(url);
    }
    // 如果模式是一个数组，我们遍历每个模式
    if (Array.isArray(patternOrPatterns)) {
        for (let i = 0; i < patternOrPatterns.length; i++) {
            if (testPattern(patternOrPatterns[i], url)) {
                return true;
            }
        }
        return false;
    } else {
        // 否则，我们只匹配单个模式
        return testPattern(patternOrPatterns, url);
    }
}