var Modeler = require("../Modeler.js");
var className = 'TypeCustomPriorMarketingBundleSalesOrderLineReferenceType';

var TypeCustomPriorMarketingBundleSalesOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomPriorMarketingBundleSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleSalesOrderLineReferenceType",
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
	  CustomPriorMarketingBundleSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomPriorMarketingBundleSalesOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomPriorMarketingBundleSalesOrderLineReferenceType;
Modeler.register(TypeCustomPriorMarketingBundleSalesOrderLineReferenceType, "TypeCustomPriorMarketingBundleSalesOrderLineReferenceType");
