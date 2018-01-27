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
        searchByLineNumber(query);
        return;
    }

    alert("버스 번호, #번호, 차량등록번호 형태로 입력해주세요");
}

function searchByLicenseNumber(query){
    alert("버스 등록번호로 검색");
}

function searchByID(query) {
    alert("고유 번호로 검색");
}

function searchByLineNumber(query) {
    alert("노선 번호로 검색")
}