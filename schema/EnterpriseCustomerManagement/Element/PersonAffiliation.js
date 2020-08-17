var Modeler = require("../Modeler.js");
var className = 'ElementPersonAffiliation';

var ElementPersonAffiliation = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonAffiliation: {
      type: "TypePersonAffiliationType",
      wsdlDefinition: {
        name: "PersonAffiliation",
        type: "PersonAffiliationType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the affiliation or relationship between a Person and an Organization. For example, in Siebel terminology it could translate into the Contact and Account relationship."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  PersonAffiliation: {
      type: "TypePersonAffiliationType",
      wsdlDefinition: {
        name: "PersonAffiliation",
        type: "PersonAffiliationType",
        "xsd:annotation": {
          "xsd:documentation": "Details of the affiliation or relationship between a Person and an Organization. For example, in Siebel terminology it could translate into the Contact and Account relationship."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonAffiliation;
Modeler.register(ElementPersonAffiliation, "ElementPersonAffiliation");
