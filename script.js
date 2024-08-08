function calculate() {
    const packageType = document.getElementById("package").value;
    const minutes = parseInt(document.getElementById("minutes").value);
    const isSmallLanguage = document.getElementById("small-language").value === "yes";
    
    let costPerMinute;
    switch (packageType) {
        case "L1":
            costPerMinute = 10;
            break;
        case "L2":
            costPerMinute = 20;
            break;
        case "L3":
            costPerMinute = 50;
            break;
    }

    const coefficient = isSmallLanguage ? 1.2 : 1;

    // Calculate results
    const result1 = `您应当在TTCX选择哪个翻译剧套餐类型：${packageType} Package`;
    
    let result2;
    if (minutes <= 50) {
        result2 = '您应当在adds-on处填写多少分钟：不需要添加adds-on';
    } else {
        const addOnMinutes = Math.round((minutes - 50) * coefficient);
        result2 = `您应当在adds-on处填写多少分钟：${addOnMinutes}`;
    }

    let result3;
    if (minutes <= 50) {
        if (packageType === "L1") {
            result3 = '如果想获得该项福利，60天内您需要为这部剧在TikTok上花费多少广告费（USD）：4,000';
        } else if (packageType === "L2") {
            result3 = '如果想获得该项福利，60天内您需要为这部剧在TikTok上花费多少广告费（USD）：8,000';
        } else if (packageType === "L3") {
            result3 = '如果想获得该项福利，60天内您需要为这部剧在TikTok上花费多少广告费（USD）：20,000';
        }
    } else {
        const totalCost = costPerMinute * minutes * coefficient * 8;
        result3 = `如果想获得该项福利，60天内您需要为这部剧在TikTok上花费多少广告费（USD）：${totalCost.toLocaleString('en-US')}`;
    }

    // Display results
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;

    document.getElementById("result1").classList.add("green-bold");
    document.getElementById("result2").classList.add("green-bold");
    document.getElementById("result3").classList.add("green-bold");
}