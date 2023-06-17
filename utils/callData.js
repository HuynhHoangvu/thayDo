
const renderNapbills = (arrNapbills) => {
    let content = ``;
    arrNapbills.forEach((item) => {
        content += `
        <li class="ml-3 ">
            <button class="btn btn-outline-info" id='${item.tabName}'>${item.showName}</button>
        </li>
        `;
    })
    document.querySelector('#nav-pills-items').innerHTML = content;
};


const renderNewArrayItems = (findNewArrayItems) => {
    let content = ``;
    findNewArrayItems.forEach((item) => {
        content += `
        <div class="col-3 mb-2">
            <div class="card text-white bg-info">
                <img class="card-img-top img-fluid" src="${item.imgSrc_jpg}" alt="" style="width: 200px;height: 210px">
                <div class="card-body p-0">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <button class="btn btn-outline-danger w-100" id='${item.id}' onclick='clickItems(${item.id})'>Try On</button>
                </div>
            </div>
        </div>`;
    });
    document.querySelector('#content-items').innerHTML = content;
};

let showItems = (idElement,list,itemsShow,idElementShow) => {
    document.querySelector(`#${idElement}`).onclick = function (e) {
        let newArrListItems = list.findNewArrayItems(list.tabPanes,itemsShow);
        renderNewArrayItems(list.findNewArrayItems(list.tabPanes,itemsShow));
        newArrListItems.forEach((item) => {
            document.getElementById(`${item.id}`).onclick = function () {
                document.querySelector(`#${idElementShow}`).style.background = `url('${item.imgSrc_png}')`;
            };
        })
    };
};

export {renderNapbills,showItems};


