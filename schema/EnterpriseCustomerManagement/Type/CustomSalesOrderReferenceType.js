var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesOrderReferenceType';

var TypeCustomSalesOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderReferenceType",
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
	  CustomSalesOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesOrderReferenceType;
Modeler.register(TypeCustomSalesOrderReferenceType, "TypeCustomSalesOrderReferenceType");
