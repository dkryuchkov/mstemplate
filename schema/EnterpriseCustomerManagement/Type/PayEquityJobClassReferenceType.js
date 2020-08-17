var Modeler = require("../Modeler.js");
var className = 'TypePayEquityJobClassReferenceType';

var TypePayEquityJobClassReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  PayEquityJobClassIdentification: {
      type: "TypePayEquityJobClassIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayEquityJobClassIdentification",
        type: "PayEquityJobClassIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPayEquityJobClassReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayEquityJobClassReferenceType",
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
	  PayEquityJobClassIdentification: {
      type: "TypePayEquityJobClassIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:PayEquityJobClassIdentification",
        type: "PayEquityJobClassIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomPayEquityJobClassReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomPayEquityJobClassReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypePayEquityJobClassReferenceType;
Modeler.register(TypePayEquityJobClassReferenceType, "TypePayEquityJobClassReferenceType");
