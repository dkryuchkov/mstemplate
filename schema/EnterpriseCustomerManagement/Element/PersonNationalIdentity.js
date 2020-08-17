var Modeler = require("../Modeler.js");
var className = 'ElementPersonNationalIdentity';

var ElementPersonNationalIdentity = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonNationalIdentity: {
      type: "TypePersonNationalIdentityType",
      wsdlDefinition: {
        name: "PersonNationalIdentity",
        type: "PersonNationalIdentityType",
        "xsd:annotation": {
          "xsd:documentation": "Entity capturing details about person's national ID"
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
	  PersonNationalIdentity: {
      type: "TypePersonNationalIdentityType",
      wsdlDefinition: {
        name: "PersonNationalIdentity",
        type: "PersonNationalIdentityType",
        "xsd:annotation": {
          "xsd:documentation": "Entity capturing details about person's national ID"
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementPersonNationalIdentity;
Modeler.register(ElementPersonNationalIdentity, "ElementPersonNationalIdentity");
