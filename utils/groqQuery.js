export const indexQuery = (lang) => `
*[_type == 'landingPage' && _id == 'landingPage'][0] {
  "hero": {
    "headline": coalesce(section1.headline.${lang}, section1.headline.en, false),
    "subtitle": coalesce(section1.productOffer.${lang}, section1.productOffer.en, false),
    "buttonLabel": coalesce(section1.btnText.${lang}, section1.btnText.en, false),
  },
  "intro": {
		"title": coalesce(section2.headline.${lang}, section2.headline.en, false),
    "subtitle":coalesce(section2.copy.${lang}, section2.copy.en, false),
    "bodyCopy": coalesce(section2.copy.${lang}, section2.copy.en, false),
    "buttonLabel": coalesce(section2.btnText.${lang}, section2.btnText.en, false),
    "img": section2.image,
  },
  "highlights": {
	  "backgroundImg": section3.image,
  	"highlights": section3.highlights[]{
    	_key,
    	"title": coalesce(title.${lang}, title.en, false),
    	"copy": coalesce(copy.${lang}, copy.en, false),
  	},
	},
  "info": {
    "img": section4.image,
    "points":  section4.benefits[]{
    	_key,
    	"title": coalesce(title.${lang}, title.en, false),
    	"copy": coalesce(copy.${lang}, copy.en, false),
  	},
    "buttonLabel": coalesce(section4.btnText.${lang}, section4.btnText.en, false),
  },
  "jumbotron": {
    "heading": coalesce(section5.headline.${lang}, section5.headline.en, false),
    "copy":  coalesce(section5.copy.${lang}, section5.copy.en, false),
    "buttonLabel": coalesce(section5.btnText.${lang}, section5.btnText.en, false),
  },
  "about": {
    "title": coalesce(section6.headline.${lang}, section6.headline.en, false),
    "copy": coalesce(section6.copy.${lang}, section6.copy.en, false),
    "image": section6.image
  },
}
`

export const headerQuery = (lang) => `
*[_type == 'landingPage' && _id == 'landingPage'][0] {
	"headerBtnText": coalesce(header.headerBtnText.${lang}, header.headerBtnText.en, false),
	"headerContactText": coalesce(header.headerContactText.${lang}, header.headerContactText.en, false),
}
`

export const footerQuery = (lang) => `
*[_type == 'landingPage' && _id == 'landingPage'][0] {
  "contact": {
    "title": coalesce(contact.headline.${lang}, contact.headline.en, false),
    "copy": coalesce(contact.copy.${lang}, contact.copy.en, false),
    "socials": {
			"instagram": coalesce(contact.instagram, false),
      "twitter": coalesce(contact.twitter, false),
      "facebook": coalesce(contact.facebook, false),
      "linkedin": coalesce(contact.linkedin, false)
    }
  },
  "newsletter" : {
    "title": coalesce(newsletter.headline.${lang}, newsletter.headline.en, false),
    "checkboxCopy": coalesce(newsletter.checkboxCopy.${lang}, newsletter.checkboxCopy.en, false),
    "copy": coalesce(newsletter.copy.${lang}, newsletter.copy.en, false),
		"inputName": coalesce(newsletter.inputName.${lang}, newsletter.inputName.en, false),
    "inputEmail": coalesce(newsletter.inputEmail.${lang}, newsletter.inputEmail.en, false),
    "subscribeBtn": coalesce(newsletter.subscribeBtn.${lang}, newsletter.subscribeBtn.en, false),
  }
}
`

export const privacyPolicyQuery = (lang) => `
*[_type == 'privacyPolicy' && _id == 'privacyPolicy'][0] {
  "content": coalesce(content.${lang}, content.en, false),
  "header": coalesce(header.${lang}, header.en, false)
}
`