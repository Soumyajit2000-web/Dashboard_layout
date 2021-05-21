function toggle(){

    
    let sidebar = document.getElementById('sidebar');
    let btn = document.getElementById('menu-btn');
    let mainContent = document.getElementById('mainContent');

    btn.addEventListener('click', function run() {
        sidebar.classList.toggle('toggle');
        // console.log('clicked');
        mainContent.classList.toggle('toggle-main')
    });
    
}

toggle();
