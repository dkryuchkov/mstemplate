var Modeler = require("../Modeler.js");
var className = 'TypeCustomVendorPartyReferenceType';

var TypeCustomVendorPartyReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomVendorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVendorPartyReferenceType",
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
	  CustomVendorPartyReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomVendorPartyReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomVendorPartyReferenceType;
Modeler.register(TypeCustomVendorPartyReferenceType, "TypeCustomVendorPartyReferenceType");
