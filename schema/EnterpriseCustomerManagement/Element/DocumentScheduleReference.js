var Modeler = require("../Modeler.js");
var className = 'ElementDocumentScheduleReference';

var ElementDocumentScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  DocumentScheduleReference: {
      type: "TypeDocumentScheduleReferenceType",
      wsdlDefinition: {
        name: "DocumentScheduleReference",
        type: "DocumentScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a schedule of a document. A schedule of document is typically at the third level from the document root. It is a child of a document line. It typically represents a decomposition of the line such as shipment schedule. Concretely what a schedule is will depend on the document type being referred to.  Ex, a schedule for PurchaseOrder, SalesOrder, and FulfillmentOrder are the PurchaseOrderShipment, SalesOrderSchedule, and FulfillmentOrderSchedule, respectively."
        },
        ns: "WL5G3N2",
        attribute: false
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
	  DocumentScheduleReference: {
      type: "TypeDocumentScheduleReferenceType",
      wsdlDefinition: {
        name: "DocumentScheduleReference",
        type: "DocumentScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a schedule of a document. A schedule of document is typically at the third level from the document root. It is a child of a document line. It typically represents a decomposition of the line such as shipment schedule. Concretely what a schedule is will depend on the document type being referred to.  Ex, a schedule for PurchaseOrder, SalesOrder, and FulfillmentOrder are the PurchaseOrderShipment, SalesOrderSchedule, and FulfillmentOrderSchedule, respectively."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementDocumentScheduleReference;
Modeler.register(ElementDocumentScheduleReference, "ElementDocumentScheduleReference");
