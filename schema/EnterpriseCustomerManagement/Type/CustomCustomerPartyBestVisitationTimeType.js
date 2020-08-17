var Modeler = require("../Modeler.js");
var className = 'TypeCustomCustomerPartyBestVisitationTimeType';

var TypeCustomCustomerPartyBestVisitationTimeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomCustomerPartyBestVisitationTimeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBestVisitationTimeType",
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
	  CustomCustomerPartyBestVisitationTimeType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomCustomerPartyBestVisitationTimeType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomCustomerPartyBestVisitationTimeType;
Modeler.register(TypeCustomCustomerPartyBestVisitationTimeType, "TypeCustomCustomerPartyBestVisitationTimeType");
