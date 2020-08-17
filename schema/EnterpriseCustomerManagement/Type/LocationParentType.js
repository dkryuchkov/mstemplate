var Modeler = require("../Modeler.js");
var className = 'TypeLocationParentType';

var TypeLocationParentType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationIdentification",
        type: "LocationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLocationParentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLocationParentType",
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
	  SequenceNumber: {
      type: "TypeNumericType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SequenceNumber",
        type: "NumericType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    LocationIdentification: {
      type: "TypeLocationIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:LocationIdentification",
        type: "LocationIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomLocationParentType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomLocationParentType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeLocationParentType;
Modeler.register(TypeLocationParentType, "TypeLocationParentType");
