const ssbBox = document.getElementsByClassName("ssb-box");
     const defenseBox = document.getElementsByClassName("defense-box");
     const contentSsb = document.getElementById("content-ssb");
    const contentDefense = document.getElementById("content-defense");
     function showSsb(){
      contentDefense.style.display="none"; 
      setTimeout(()=>{
        contentSsb.style.display="flex";
      },500);
    }
     function showDefense(){
       contentSsb.style.display="none";
       setTimeout(()=>{
       contentDefense.style.display="flex";},500);
    }
     