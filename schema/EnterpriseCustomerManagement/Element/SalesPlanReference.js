var Modeler = require("../Modeler.js");
var className = 'ElementSalesPlanReference';

var ElementSalesPlanReference = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  SalesPlanReference: {
      type: "TypeSalesPlanReferenceType",
      wsdlDefinition: {
        name: "SalesPlanReference",
        type: "SalesPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlan. A SalesPlan object enables sales teams to strategize on specific set of customers, to develop insight, identify key decision makers, manage an action plan and ultimately maximize sales. A SalesPlan can be shared across the sales team members and is typically based on company-defined planning periods.  Users can associate instances of SalesObjective and activities to a SalesPlan to ensure traction over a period of time. SalesPlan is strategic by nature. It is intended for longer term where as typically, a SalesObjective is used for a shorter time period. As an example, a newly appointed Account Manager would create a SalesPlan for his target customer. As part of his role, he would do a SWOT analysis of that customer to understand competitive landscape, market conditions, key influencers and capture that information in the SalesPlan.  He will use this insight to set up short term objectives to improve relationships and maximize sales."
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
	  SalesPlanReference: {
      type: "TypeSalesPlanReferenceType",
      wsdlDefinition: {
        name: "SalesPlanReference",
        type: "SalesPlanReferenceType",
        "xsd:annotation": {
          "xsd:documentation": "Refers to a SalesPlan. A SalesPlan object enables sales teams to strategize on specific set of customers, to develop insight, identify key decision makers, manage an action plan and ultimately maximize sales. A SalesPlan can be shared across the sales team members and is typically based on company-defined planning periods.  Users can associate instances of SalesObjective and activities to a SalesPlan to ensure traction over a period of time. SalesPlan is strategic by nature. It is intended for longer term where as typically, a SalesObjective is used for a shorter time period. As an example, a newly appointed Account Manager would create a SalesPlan for his target customer. As part of his role, he would do a SWOT analysis of that customer to understand competitive landscape, market conditions, key influencers and capture that information in the SalesPlan.  He will use this insight to set up short term objectives to improve relationships and maximize sales."
        },
        ns: "WL5G3N2",
        attribute: false
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = ElementSalesPlanReference;
Modeler.register(ElementSalesPlanReference, "ElementSalesPlanReference");
