document.addEventListener("DOMContentLoaded", () => {

    let darkInfo;
    if ( !localStorage.getItem("dark") )
        localStorage.getItem("dark", false);
    darkInfo = JSON.parse(localStorage.getItem("dark"));

    const switchDark = () => {
        // document.querySelector("body").classList.toggle('dark');
        // document.querySelector(".dark-mode-icon").classList.toggle('dark');
        document.querySelector("body").classList.remove('dark');
        document.querySelector(".dark-mode-icon").classList.remove('dark');
    }
    
    const switchLight = () => {
        document.querySelector("body").classList.add('dark');
        document.querySelector(".dark-mode-icon").classList.add('dark');
    }

    if (darkInfo)
        switchDark();
    else
        switchLight();

    document.querySelector(".btn").addEventListener('click', () => {
        // alert("click!");
        // darkInfo =!darkInfo;
        if (darkInfo){
            darkInfo = false;
            switchLight();
        } else {
            darkInfo = true;
            switchDark();
        }
        localStorage.setItem("dark", darkInfo);
    })
})