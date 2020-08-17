var Modeler = require("../Modeler.js");
var className = 'TypeCustomerReferenceType';

var TypeCustomerReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SystemNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SystemNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SystemName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExternalId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ExternalId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
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
	  SystemNumber: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SystemNumber",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SystemName: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:SystemName",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    ExternalId: {
      type: "TypeTextType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "corecustomerpartycust:ExternalId",
        type: "WL5G3N2:TextType",
        attribute: false,
        ns: "corecustomerpartycust"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerReferenceType;
Modeler.register(TypeCustomerReferenceType, "TypeCustomerReferenceType");
