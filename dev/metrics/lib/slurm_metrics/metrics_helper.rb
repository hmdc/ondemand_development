# frozen_string_literal: true

module SlurmMetrics
  # Utility methods to format data for the metrics templates.
  class MetricsHelper

    def progress_title(total, label, value)
      "#{label} #{metrics_round(total, value)}%"
    end

    def metrics_round(total, value)
      value = total.zero? ? 0.0 : value / total.to_f
      # ENSURE AT LEAST 1% IS SHOWN FOR SMALL NUMBERS
      value = value < 0.01 ? value.ceil(2) : value.round(2)
      (value * 100).to_i
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

    def fairshare_class(fairshare_value)
      fairshare_value = fairshare_value.to_s.to_f

      if fairshare_value > 0.79
        return "bg-success"
      elsif fairshare_value < 0.5
        return "bg-danger"
      else
        return "bg-warning"
      end
    end

    def format_duration(seconds)
      return sprintf("00m:%02ds", seconds) if seconds < 60.0

      hours = seconds / 3600
      minutes = (seconds % 3600) / 60

      sprintf("%02dH:%02dm", hours, minutes)
    end
  end
end