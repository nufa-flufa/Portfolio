

$(document).ready(init)

function init(){
    console.log('Starting up');
    renderSpecialities()
    renderProjects()
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

    $('.spec-container').html(strHTMLs.join(''));
}

function renderProjects(){
    var strHTMLs = gProjs.map(function(proj){
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.number}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.png" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    })
    console.log(strHTMLs)
    $('.projs-container').html(strHTMLs.join(''));
}