var Modeler = require("../Modeler.js");
var className = 'ElementSourceDocumentScheduleReference';

var ElementSourceDocumentScheduleReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SourceDocumentScheduleReference: {
      type: "TypeDocumentScheduleReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentScheduleReference",
        type: "DocumentScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a schedule of a document which is a source of the associated entity, e.g., a PurchaseOrderShipment (as a DocumentScheduleReference)  is a source of a ReceiptAdviceLine. A schedule of document is typically at the third level from the document root. It is a child of a document line. It typically represents a decomposition of the line such as shipment schedule. Concretely what a schedule is will depend on the document type being referred to. Ex, a schedule for PurchaseOrder, SalesOrder, and FulfillmentOrder are the PurchaseOrderShipment, SalesOrderSchedule, and FulfillmentOrderSchedule, respectively."
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
	  SourceDocumentScheduleReference: {
      type: "TypeDocumentScheduleReferenceType",
      wsdlDefinition: {
        name: "SourceDocumentScheduleReference",
        type: "DocumentScheduleReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refer to a schedule of a document which is a source of the associated entity, e.g., a PurchaseOrderShipment (as a DocumentScheduleReference)  is a source of a ReceiptAdviceLine. A schedule of document is typically at the third level from the document root. It is a child of a document line. It typically represents a decomposition of the line such as shipment schedule. Concretely what a schedule is will depend on the document type being referred to. Ex, a schedule for PurchaseOrder, SalesOrder, and FulfillmentOrder are the PurchaseOrderShipment, SalesOrderSchedule, and FulfillmentOrderSchedule, respectively."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSourceDocumentScheduleReference;
Modeler.register(ElementSourceDocumentScheduleReference, "ElementSourceDocumentScheduleReference");
