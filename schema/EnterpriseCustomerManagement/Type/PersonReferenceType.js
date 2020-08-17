var Modeler = require("../Modeler.js");
var className = 'TypePersonReferenceType';

var TypePersonReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PersonIdentification: {
      type: "TypePersonIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonIdentification",
        type: "PersonIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  PersonIdentification: {
      type: "TypePersonIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PersonIdentification",
        type: "PersonIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPersonReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPersonReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePersonReferenceType;
Modeler.register(TypePersonReferenceType, "TypePersonReferenceType");
