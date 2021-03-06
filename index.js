

// La navigation
var nav = new Vue({
    // Sélecteur
    el: '#nav',
    // Définir les propriétés et leurs donner des valeurs.
    data: {
        active: 'home',
        message: 'prout'
    },

    // Fonction que nous allons utiliser
    methods: {
        rendreActif: function(item){
            // Quand le modèle à changé il est mis à jour automatiquement.
            this.active = item;
        }
    }
});

nav.message =  'prout2'

//  Formulaire de recherche
var recherche = new Vue({
    el: '#recherche',
    data: {
        lettreTapee: "",
        // The data model. Normalement il faut le faire en Ajax,
        articles: [
            {
                "title": "What You Need To Know About CSS Variables",
                "url": "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
            },
            {
                "title": "Freebie: 4 Great Looking Pricing Tables",
                "url": "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
            },
            {
                "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                "url": "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
            },
            {
                "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                "url": "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
                "image": "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
            },
            {
                "title": "Learn SQL In 20 Minutes",
                "url": "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
                "image": "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
            },
            {
                "title": "Creating Your First Desktop App With HTML, JS and Electron",
                "url": "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
                "image": "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
            }
        ]
    },
    computed: {
        // A computed property that holds only those articles that match the searchString.
        filteredArticles: function () {
            var articles_array = this.articles,
                lettreTapee = this.lettreTapee;

            if(!lettreTapee){
                return articles_array;
            }

            lettreTapee = lettreTapee.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(lettreTapee) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return articles_array;;
        }
    }
});

// Footer...............
// Vue.component('footer-marie', {
//     template: '<footer>Ceci est le pied de page</footer>'
// });

// var monFooter = new Vue({
//     el:'#footer'
// })

// Props ............... 

Vue.component('footer-marie', {
    props: ['reseau'],
    template: '<li>{{ reseau.text }}</li>'
  })
  
  var monFooter = new Vue({
    el: '#footer',
    data: {
      reseauSociaux: [
        { id: 0, text: 'Linkedin' },
        { id: 1, text: 'Facebook' },
        { id: 2, text: 'Twitter' }
      ],
      isActive: true
    }
  })

// Choix ....................
let choix = new Vue({
    el: "#choix",
    data: {
        success: false,
        choixInput: ''
    },
    computed: {
        statutChoix: function () {
            // this fait référence à let choix
            // Si success = true alors affiche success sinon affiche erreor
             return this.success === true ? 'success' : 'error'
        }
    }   
})
// Faire le code que si success à été modifié
var identiteUtilisateur = new Vue({
  el: '#demo',
  data: {
    firstName: 'Marie',
    lastName: 'Thielens'
  },
  computed: {
    fullName: {
        get: function () {
            // this = var identiteUtilisateur
            return this.firstName + ' ' + this.lastName
        },
        set: function (value) {
            // console.log(value) = la vlaur de l'input
            let partie = value.split(' ') // Les parties = la valeur séparé d'un espace
            this.firstName = partie[0] // Modifier le prénom
            this.lastName = partie[1] // Modifier le nom
        }

    }
  }
})