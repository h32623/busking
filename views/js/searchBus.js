function searchBus() {
    var query = document.getElementById("query").value;
    //버스 차량번호인 경우

    var koreanRex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if(koreanRex.test(query)) {
        searchByLicenseNumber(query);
        return;
    }

    //고유번호
    if(query.startsWith("#")) {
        searchByID(query);
        return;
    }

    //노선번호
    var busNumberRex = /[0-9]/;
    if(busNumberRex.test(query)) {
        showMapByLineNumber(query);
        return;
    }

    alert("버스 번호, #번호, 차량등록번호 형태로 입력해주세요");
}

function searchByLicenseNumber(query){
    alert("버스 등록번호로 검색");
    window.location = "./communication.html?query=" + query;
}

function searchByID(query) {
    alert("고유 번호로 검색");
    window.location = "./communication.html?query=" + query;
}

function showMapByLineNumber(query) {
    alert("지도로 이동")
    //이 부분은 현정님께서 수정해주시면 감사하겠습니다.
    //window.location = "./busMap.ejs?query=" + query;
}
