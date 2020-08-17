var Modeler = require("../Modeler.js");
var className = 'TypeCustomerPartyQueryCodeType';

var TypeCustomerPartyQueryCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomerPartyQueryCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomerPartyQueryCodeType",
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
	  CustomerPartyQueryCodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomerPartyQueryCodeType",
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

module.exports = TypeCustomerPartyQueryCodeType;
Modeler.register(TypeCustomerPartyQueryCodeType, "TypeCustomerPartyQueryCodeType");
