var Modeler = require("../Modeler.js");
var className = 'TypeTeamReferenceType';

var TypeTeamReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  TeamIdentification: {
      type: "TypeTeamIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TeamIdentification",
        type: "TeamIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTeamReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTeamReferenceType",
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
	  TeamIdentification: {
      type: "TypeTeamIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:TeamIdentification",
        type: "TeamIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomTeamReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomTeamReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeTeamReferenceType;
Modeler.register(TypeTeamReferenceType, "TypeTeamReferenceType");
