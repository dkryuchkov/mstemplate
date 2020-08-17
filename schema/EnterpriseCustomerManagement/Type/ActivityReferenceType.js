var Modeler = require("../Modeler.js");
var className = 'TypeActivityReferenceType';

var TypeActivityReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  ActivityIdentification: {
      type: "TypeActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActivityIdentification",
        type: "ActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomActivityReferenceType",
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
	  ActivityIdentification: {
      type: "TypeActivityIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:ActivityIdentification",
        type: "ActivityIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomActivityReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomActivityReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeActivityReferenceType;
Modeler.register(TypeActivityReferenceType, "TypeActivityReferenceType");
