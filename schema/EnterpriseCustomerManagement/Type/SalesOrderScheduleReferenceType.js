var Modeler = require("../Modeler.js");
var className = 'TypeSalesOrderScheduleReferenceType';

var TypeSalesOrderScheduleReferenceType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesOrderIdentification: {
      type: "TypeSalesOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderIdentification",
        type: "SalesOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderScheduleIdentification: {
      type: "TypeSalesOrderScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderScheduleIdentification",
        type: "SalesOrderScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesOrderScheduleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
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
	  SalesOrderIdentification: {
      type: "TypeSalesOrderIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderIdentification",
        type: "SalesOrderIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderLineIdentification: {
      type: "TypeSalesOrderLineIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderLineIdentification",
        type: "SalesOrderLineIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    SalesOrderScheduleIdentification: {
      type: "TypeSalesOrderScheduleIdentificationType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:SalesOrderScheduleIdentification",
        type: "SalesOrderScheduleIdentificationType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    Custom: {
      type: "TypeCustomSalesOrderScheduleReferenceType",
      wsdlDefinition: {
        minOccurs: "0",
        name: "WL5G3N2:Custom",
        type: "corecomcust:CustomSalesOrderScheduleReferenceType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSalesOrderScheduleReferenceType;
Modeler.register(TypeSalesOrderScheduleReferenceType, "TypeSalesOrderScheduleReferenceType");
