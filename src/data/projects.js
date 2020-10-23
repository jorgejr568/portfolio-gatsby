class ProjectImage {
  constructor(image) {
    this.image = image
  }
}
class Project {
  constructor({ slug, title, subtitle, technologies, link, images }) {
    this.slug = slug
    this.title = title
    this.subtitle = subtitle
    this.technologies = technologies
    this.link = link
    this.images = images
  }
}

module.exports = [
  new Project({
    slug: 'contracts-immobiles',
    title: 'Dashboard - Properties & Contracts',
    subtitle: 'Manage properties and contracts with a material dashboard',
    technologies: [
      'vue.js (vue-router, vuex)',
      'vuetify',
      'php',
      'laravel',
      'mysql',
    ],
    link: 'https://contratos-imoveis.jorgejunior.dev',
    year: 2020,
    images: [
      new ProjectImage('portfolio/contracts-immobiles/properties.png'),
      new ProjectImage('portfolio/contracts-immobiles/login.png'),
      new ProjectImage('portfolio/contracts-immobiles/home.png'),
      new ProjectImage('portfolio/contracts-immobiles/properties-create.png'),
      new ProjectImage('portfolio/contracts-immobiles/properties-delete.png'),
      new ProjectImage('portfolio/contracts-immobiles/contracts-create.png'),
    ],
  }),
  new Project({
    slug: 'cefet-seminaries',
    title: 'CEFET-RJ Seminaries System',
    subtitle:
      'Web system to manage seminaries, participation, certificates generation and reports to CEFET-RJ',
    year: 2017,
    technologies: ['php', 'laravel', 'mysql', 'jquery', 'bootstrap'],
    link: 'https://eic.cefet-rj.br/seminarios/',
    images: [new ProjectImage('portfolio/cefet-seminaries/home.png')],
  }),
].sort(({ year: a }, { year: b }) => b - a)
