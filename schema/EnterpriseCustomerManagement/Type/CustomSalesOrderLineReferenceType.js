var Modeler = require("../Modeler.js");
var className = 'TypeCustomSalesOrderLineReferenceType';

var TypeCustomSalesOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderLineReferenceType",
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
	  CustomSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomSalesOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomSalesOrderLineReferenceType;
Modeler.register(TypeCustomSalesOrderLineReferenceType, "TypeCustomSalesOrderLineReferenceType");
