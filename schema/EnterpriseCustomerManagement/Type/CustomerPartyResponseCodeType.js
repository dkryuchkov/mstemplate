var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyResponseCodeType';

var TypeCustomerPartyResponseCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyResponseCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomerPartyResponseCodeType",
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "WL5G3N2:CodeType"
          }
        },
        attribute: false,
        type: "xsd:string"
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
	  CustomerPartyResponseCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomerPartyResponseCodeType",
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "WL5G3N2:CodeType"
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomerPartyResponseCodeType;
Modeler.register(TypeCustomerPartyResponseCodeType, "TypeCustomerPartyResponseCodeType");
