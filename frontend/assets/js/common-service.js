var app = angular.module("app");

app.service("COMMON_SERVICE", [function() {
    // set on login
    this.USER_META = {};


    // SIMULATION DATA VARIABLE
    var telecomProviderList = [
        { "id": 1, "name": "Airtel", "icon": "img/vodafone-128.png" },
        { "id": 2, "name": "Vodafone", "icon": "icon.png" },
        { "id": 3, "name": "R-COM", "icon": "icon.png" },
        { "id": 4, "name": "Rilance JIO", "icon": "icon.png" },
        { "id": 5, "name": "Aircel", "icon": "icon.png" },
        { "id": 6, "name": "Idea", "icon": "icon.png" }
    ];
    var handsetList = ["Apple", "Samsung", "MI", "Lenovo", "1+", "Motorola"];
    var activeStatus = ["true", "false"];
    var simtypeList = ["CDMA", "GSM"];
    var circleList = ["MUMBAI", "Kolkata", "Chennai", "Delhi", "Pune", "Hyderabad", "Banglore"];

    this.getTelecomProviderList = function() {
        return telecomProviderList;
    }

    this.DATA_LIST = [];
    this.getDataList = function() {
        for (var i = 0; i < 200; i++) {
            var iobj = {
                "provider": telecomProviderList[Math.floor(Math.random() * 6)],
                "msidn": this.randomMsidn(),
                "circle": circleList[Math.floor(Math.random() * 7)],
                "simtype": simtypeList[Math.floor(Math.random() * 2)],
                "activeStatus": activeStatus[Math.floor(Math.random() * 2)],
                "handset": handsetList[Math.floor(Math.random() * 6)],
                "ctime": this.randomDate()
            };

            this.DATA_LIST.push(iobj);
        }

        return this.DATA_LIST;
    };

    this.randomMsidn = function() {
        var msidn = "" + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) +
            Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + Math.floor(Math.random() * 9) + "";
        return msidn;
    };

    this.randomDate = function() {
        var cdate = new Date();
        cdate.setDate(cdate.getDate() - Math.floor(Math.random() * 7));
        return cdate;
    }

}]);