var Modeler = require("../Modeler.js");
var className = 'TypeCustomTransportationSalesOrderLineReferenceType';

var TypeCustomTransportationSalesOrderLineReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTransportationSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTransportationSalesOrderLineReferenceType",
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
	  CustomTransportationSalesOrderLineReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTransportationSalesOrderLineReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTransportationSalesOrderLineReferenceType;
Modeler.register(TypeCustomTransportationSalesOrderLineReferenceType, "TypeCustomTransportationSalesOrderLineReferenceType");
