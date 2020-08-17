var Modeler = require("../Modeler.js");
var className = 'TypeCustomTransportationSalesOrderReferenceType';

var TypeCustomTransportationSalesOrderReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CustomTransportationSalesOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTransportationSalesOrderReferenceType",
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
	  CustomTransportationSalesOrderReferenceType: {
      type: "string",
      wsdlDefinition: {
        name: "CustomTransportationSalesOrderReferenceType",
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCustomTransportationSalesOrderReferenceType;
Modeler.register(TypeCustomTransportationSalesOrderReferenceType, "TypeCustomTransportationSalesOrderReferenceType");
