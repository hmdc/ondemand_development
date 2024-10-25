# frozen_string_literal: true

module SlurmMetrics
  # Utility methods to format data for the metrics templates.
  class MetricsHelper

    def progress_title(total, label, value)
      "#{label} #{metrics_round(total, value)}%"
    end

    def metrics_round(total, value)
      value = total.zero? ? 0.0 : value / total.to_f
      (value.ceil(2) * 100).to_i
    end

    def metrics_ceil(total, value)
      value = total.zero? ? 0.0 : value / total.to_f
      (value.ceil(1) * 100).to_i
    end

    def efficiency_class(efficiency_value)
      return 'bg-primary' if efficiency_value.nil?

      if efficiency_value > 74
        return "bg-success"
      elsif efficiency_value < 25
        return "bg-danger"
      else
        return "bg-warning"
      end
    end
  end
end
