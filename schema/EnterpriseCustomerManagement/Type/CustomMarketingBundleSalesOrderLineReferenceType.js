var Modeler = require("../Modeler.js");
var className = 'TypeCustomMarketingBundleSalesOrderLineReferenceType';

var TypeCustomMarketingBundleSalesOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomMarketingBundleSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleSalesOrderLineReferenceType",
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
	  CustomMarketingBundleSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomMarketingBundleSalesOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomMarketingBundleSalesOrderLineReferenceType;
Modeler.register(TypeCustomMarketingBundleSalesOrderLineReferenceType, "TypeCustomMarketingBundleSalesOrderLineReferenceType");
