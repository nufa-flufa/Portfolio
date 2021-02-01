

$(document).ready(init)

function init(){
    console.log('Starting up');
    renderSpecialities()
}

function renderSpecialities(){
    var strHTMLs = gSpecialities.map(function(spec){
    return `<div class="col-md-4">
            <span class="fa-stack fa-4x">
            <i class="fa fa-circle fa-stack-2x text-primary"></i>
            <img src="${spec.imgURL}" class="fa fa-stack-1x fa-inverse" style="border-radius: 60px;">
            </span>
          <h4 class="service-heading">${spec.header}</h4>
          <p class="text-muted">${spec.txt}</p>
        </div>`
    }) 
    console.log(strHTMLs)
    $('.spec-container').html(strHTMLs.join(''));
}